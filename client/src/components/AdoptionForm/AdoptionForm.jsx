import React, { useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import styles from "./adoptionForm.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Widget } from "@uploadcare/react-widget";
import { postNewPet, getProvincias, getCiudades } from "../../redux/actions";
import effects from "uploadcare-widget-tab-effects/react";
import swal from "sweetalert";
import { Icon } from "@iconify/react";

export default function AdoptionForm() {
  const [sent, setSent] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let userId = JSON.parse(localStorage.getItem("loggedUser"));
  let newid = userId.data ? userId.data.id : null;
  const [userLocation, setLocation] = useState({ latitude: 0, longitude: 0 });
  const provincias = useSelector((state) => state.provincias);
  const ciudades = useSelector((state) => state.ciudades);
  const isMounted = useRef(false);
  const formRef = useRef();

  useEffect(() => {
    //if (isMounted.current === true) {
      dispatch(getProvincias());
   // } else isMounted.current = true;
  }, []);

  const handleGeo = (event) => {
    event.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
           setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      return "no tenés geolocalización";
    }
  };

  let aux1 = "";
  const handleChangeProv = (provincia) => {
    if (provincia !== aux1) {
      dispatch(getCiudades(provincia));
      aux1 = provincia;
    }
  };

  return (
    <div className={styles.body}>
      <Formik
        innerRef={formRef}
        initialValues={{
          name: "",
          age: "",
          species: "",
          image: "",
          size: "",
          color: "",
          sex: "",
          temperament: "",
          provincia: "",
          ciudad: "",
          latitude: 0,
          longitude: 0,
          userId: newid,
        }}
        validate={(values) => {
          let errors = {};

          // Validacion name
          if (!values.name) {
            errors.name = "Por favor ingresa un nombre";
          } else if (values.name.length > 15) {errors.name = "Debe tener menos de 15 carácteres";
          } 
          if (!values.age) {
            errors.age = "Por favor selecciona un rango de edad";
          }
          if (!values.species) {
            errors.species = "Por favor selecciona un tipo de animal";
          }
          if (!values.size) {
            errors.size = "Por favor selecciona un tamaño";
          }
          if (!values.color) {
            errors.color = "Por favor escribe un color";
          } else if (values.color.length > 10) {
            errors.color = "Debe tener menos de 10 carácteres";
          }
          if (!values.sex) {
            errors.sex = "Por favor selecciona una opción";
          }
          if (!values.temperament) {
            errors.temperament = "Por favor escribe una descripcion";
          } else if (values.temperament.length < 40) {
            errors.temperament =
              "Por favor escribe una descripcion más detallada (40 caracteres al menos)";
          }
          if (!values.image) {
            errors.image = "Por favor selecciona una imagen";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          if (userLocation.latitude === 0 && userLocation.longitude === 0) {
            dispatch(postNewPet(values));
          } else {
            dispatch(postNewPet(values, userLocation));
          }
          resetForm();
          setSent(true);
          setTimeout(() => setSent(false), 2000);
          swal({
            title: "Congratulations!",
            text: "El perrito ha sido creado con exito",
            icon: "success",
            button: "Ok",
          }).then(() => navigate("/home"));
        }}
        validateOnMount
      >
        {({ values, errors, setFieldValue }) => (
          <div className={styles.container}>
            <Form className={styles.form}>
              <div className={styles.divinput}>
                <label>¿Cómo se llama?</label>
                <br />
                <Field
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Nombre"
                ></Field>
                <ErrorMessage
                  name="name"
                  component={() => (
                    <div className={styles.error}>{errors.name}</div>
                  )}
                />
              </div>
              <div className={styles.divinput}>
                <label>¿Qué tipo de mascota es?</label>
                <br />
                <Field as="select" className={styles.input} name="species">
                  <option disabled hidden value="">
                    Elige una opción
                  </option>
                  <option value="perro">Perro</option>
                  <option value="gato">Gato</option>
                  {/* <option value="conejo">Conejo</option>
                  <option value="tortuga">Tortuga</option>
                  <option value="cobayo">Cobayo</option> */}
                </Field>
                <ErrorMessage
                  name="species"
                  component={() => (
                    <div className={styles.error}>{errors.species}</div>
                  )}
                />
              </div>
              <div className={styles.divinput}>
                <label>¿De qué color es?</label>
                <br />
                <Field
                  className={styles.input}
                  type="text"
                  name="color"
                  placeholder="Color"
                ></Field>
                <ErrorMessage
                  name="color"
                  component={() => (
                    <div className={styles.error}>{errors.color}</div>
                  )}
                />
              </div>
              <div className={styles.divinput}>
                <label>¿Qué rango de edad tiene?</label>
                <br />
                <Field as="select" className={styles.input} name="age">
                  <option disabled hidden value="">
                    Elige una opción
                  </option>
                  <option value="Menos de un año">Menos de un año</option>
                  <option value="Entre 1 y 2 años">Entre 1 y 2 años</option>
                  <option value="Mas de 2 años">Más de 2 años</option>
                </Field>
                <ErrorMessage
                  name="age"
                  component={() => (
                    <div className={styles.error}>{errors.age}</div>
                  )}
                />
              </div>
              <div className={styles.divinput}>
                <label>¿Qué tamaño alcanzará?</label>
                <br />
                <Field as="select" className={styles.input} name="size">
                  <option disabled hidden value="">
                    Elige una opción
                  </option>
                  <option value="pequeño">Pequeño</option>
                  <option value="mediano">Mediano</option>
                  <option value="grande">Grande</option>
                </Field>
                <ErrorMessage
                  name="size"
                  component={() => (
                    <div className={styles.error}>{errors.size}</div>
                  )}
                />
              </div>
              <label>¿De qué sexo es?</label>
              <div className={styles.divradio}>
                <hr />
                <label>
                  <Field type="radio" name="sex" value="macho" /> Macho
                </label>
                <label>
                  <Field type="radio" name="sex" value="hembra" /> Hembra
                </label>
                <ErrorMessage
                  name="sex"
                  component={() => (
                    <div className={styles.error}>{errors.sex}</div>
                  )}
                />
              </div>
              <div className={styles.divinput}>
                <label>Cuentanos un poco sobre su personalidad:</label>
                <br />
                <hr />
                <Field
                  as="textarea"
                  rows="7"
                  cols="50"
                  name="temperament"
                  className={styles.textArea}
                  placeholder="Descripción..."
                  maxLength="255"
                ></Field>
                <ErrorMessage
                  name="temperament"
                  component={() => (
                    <div className={styles.error}>{errors.temperament}</div>
                  )}
                />
              </div>
              <div className={styles.divinput}>

                <label>
                  ¿Donde se encuentra nuestro amiguito? 
                </label>
                <div className={styles.contGeo2}>
                <button
                  onClick={(event) => handleGeo(event)}
                  className={styles.geo}
                >
                  <div 
                    className={styles.btntxt}
                  >
                    Usar mi ubicación
                  </div>
                  <Icon
                    icon="material-symbols:location-on"
                    color="#788eff"
                    height="40px"
                  />
                </button>

                {
                  userLocation.latitude !== 0 
                  ?
                  <Icon   className={styles.iconChk}
                    icon="material-symbols:check-circle-rounded" color="#025c4c" 
                    width="30" 
                    height="30" 
                  />
                  :
                  null
                }

              </div>
              </div>
              <label>o seleccionar </label>
              <div className={styles.region}>
                <div>
                  <Field as="select" name="provincia" className={styles.input2}>
                    <option disabled hidden value="">
                      Provincia
                    </option>
                    {provincias.map((prov) => {
                      return (
                        <option key={prov.id} value={prov.id}>
                          {prov.nombre}
                        </option>
                      );
                    })}
                  </Field>
                  {handleChangeProv(values.provincia)}
                </div>
                <div>
                  <Field as="select" name="ciudad" className={styles.input2}>
                    <option disabled hidden value="">
                      Ciudad
                    </option>
                    {ciudades.map((ciudad) => {
                      return (
                        <option key={ciudad.id} value={ciudad.id}>
                          {ciudad.nombre}
                        </option>
                      );
                    })}
                  </Field>
                  {ciudades
                    ?.filter((city) => city.id === values.ciudad)
                    .map((ciudad) => {
                      if (
                        values.latitude === 0 ||
                        values.latitude !== ciudad.centroide.lat
                      )
                        setFieldValue("latitude", ciudad.centroide.lat);
                    })}
                  <Field
                    hidden
                    type="number"
                    name="latitude"
                    value={values.latitude}
                  ></Field>
                  {ciudades
                    ?.filter((city) => city.id === values.ciudad)
                    .map((ciudad) => {
                      if (
                        values.longitude === 0 ||
                        values.longitude !== ciudad.centroide.lon
                      )
                        setFieldValue("longitude", ciudad.centroide.lon);
                    })}

                  <Field
                    hidden
                    type="number"
                    name="longitude"
                    value={values.longitude}
                  ></Field>
                </div>
              </div>
              <label>Sube una linda foto:</label>
              <div className={styles.divinput}>
                <hr />
                <Widget
                  tabs="file url"
                  locale="es"
                  name="image"
                  publicKey="d00f029a60bdde9dafab"
                  previewStep
                  customTabs={{ preview: effects }}
                  clearable
                  onFileSelect={(file) => {
                    if (!file) {
                      setFieldValue("image", "");
                      return;
                    }
                    file.done((fileInfo) => {
                      setFieldValue("image", fileInfo.cdnUrl);
                    });
                  }}
                  onChange={(file) => {
                    setFieldValue("image", file);
                  }}
                />
                <ErrorMessage
                  name="image"
                  component={() => (
                    <div className={styles.error}>{errors.image}</div>
                  )}
                />
              </div>
              {sent && (
                <p className={styles.exito}>Formulario enviado con exito!</p>
              )}
              <br />
              <div className={styles.divinput}>
                <button
                  type="submit"
                  className={
                    errors.name ||
                    errors.age ||
                    errors.species ||
                    errors.size ||
                    errors.color ||
                    errors.sex ||
                    errors.temperament ||
                    errors.image
                      ? styles.btn_disabled
                      : styles.btn
                  }
                  disabled={
                    errors.name ||
                    errors.age ||
                    errors.species ||
                    errors.size ||
                    errors.color ||
                    errors.sex ||
                    errors.temperament ||
                    errors.image
                  }
                >
                  {" "}
                  Dar en adopción
                </button>
              </div>
              <br />
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
