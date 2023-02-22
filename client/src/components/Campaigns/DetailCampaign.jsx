import React, { useEffect, useState } from "react";
import { getDetailCamp, donate } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import Footer from "../Footer/Footer";
// import NavBar from "../NavBar/NavBar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import style from "./detailCampaign.module.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { Icon } from "@iconify/react";
import imgCumplido from "../../img/ObjetivoCumplido.png";
import swal from "sweetalert";
import { useAuth0 } from "@auth0/auth0-react";

const Detail = (props) => {
  const dispatch = useDispatch();
  const campaignId = useSelector((state) => state.detailCamp);
  const { id } = useParams();
  const profile = useSelector((state) => state.profile);
  const { loginWithPopup } = useAuth0();

  useEffect(() => {
    dispatch(getDetailCamp(id));
  }, [dispatch]);
  return (
    <>
      {campaignId.length !== 0 ? (
        <div className={style.body}>
          <Link to={"/campañas"} className={style.icon}>
            <Icon icon="pajamas:go-back" width="100%" />
          </Link>
          <div className={style.container}>


            <h1>{campaignId[0].title}</h1>

            <div>
              <Link to={`../userDetail/${campaignId[0].userId}`}>
                <p>Ver persona creadora de la campaña </p>
              </Link>
            </div>

            <img
              src={campaignId[0].image}
              alt={campaignId[0].id}
              className={style.img}
            />
            <div className={style.amounts}>
              <h3>Meta:</h3>
              <p>${campaignId[0].goal}</p>
              <h3>Recaudado:</h3>
              <p>${campaignId[0].collected}</p>
            </div>
            {campaignId[0].goal <= campaignId[0].collected ? (
              <img
                src={imgCumplido}
                className={style.cumplido}
                alt="Objetivo Cumplido"
              />
            ) : null}
            <ProgressBar
              className={style.bar}
              completed={Math.floor(
                (campaignId[0].collected / campaignId[0].goal) * 100
              )}
              // bgColor="#646bff"
              // baseBgColor="#000000"
              // height="30px"
              // width="500px"
              transitionDuration="2s"
              animateOnRender={true}
              labelAlignment="outside"
              labelColor="#000000"
            />

            <div className={style.campaignInfo}>
              <h3>Descripción:</h3>
              <p className={style.textbox}> {campaignId[0].description}</p>
            </div>

            

            <Formik
              initialValues={{
                id: campaignId[0].id,
                title: campaignId[0].title,
                currency_id: "ARS",
                picture_url: campaignId[0].image,
                description: campaignId[0].description,
                category_id: "don",
                quantity: "",
                unit_price: 1,
              }}
              validate={(values) => {
                let errors = {};
                if (!values.quantity)
                  errors.quantity = "Por favor ingrese la cantidad a donar";
                else if (!/^[0-9]*$/.test(values.quantity))
                  errors.quantity = "Debe ser un número";
                else if (
                  values.quantity >
                  campaignId[0].goal - campaignId[0].collected
                )
                  errors.quantity = `Por favor ingrese un monto que no supere los ${
                    campaignId[0].goal - campaignId[0].collected
                  }`;
                return errors;
              }}
              onSubmit={(values, { resetForm }) => {
                if (!profile) {
                  swal(
                    "No es posible donar a la campaña.",
                    "Debe registrarse para poder hacerlo.",
                    "error"
                  ).then(() => loginWithPopup());
                } else {
                  localStorage.setItem(
                    "datosDonacion",
                    JSON.stringify({
                      amount: values.quantity,
                      campaignId: campaignId[0].id,
                      userId: profile.id,
                    })
                  );
                  dispatch(donate(values));
                  resetForm();
                }
              }}
              validateOnMount
            >
              {({ errors, setFieldValue }) => {
                return (
                  <Form className={style.form}>
                    <Field
                      className={style.field}
                      type="number"
                      name="quantity"
                      placeholder="Cantidad"
                      max={campaignId[0].goal - campaignId[0].collected}
                    ></Field>

                    <button
                      type="submit"
                      className={style.button}
                      disabled={
                        campaignId[0].goal <= campaignId[0].collected
                          ? true
                          : false
                      }
                    >
                      Donar
                    </button>
                    
                    <ErrorMessage
                      name="quantity"
                      component={() => (
                        <div className={style.error}>{errors.quantity}</div>
                      )}
                    />
                    {console.log(campaignId)}
                    
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Detail;
