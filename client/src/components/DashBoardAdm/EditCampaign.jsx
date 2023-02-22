import styles from "./EditCampaign.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { updateCampaignAdm } from "../../redux/actions";
import swal from "sweetalert";
import { Widget } from "@uploadcare/react-widget";
import effects from "uploadcare-widget-tab-effects/react";
const EditCampaign = ({ dataModal, setModalEditCampaign }) => {
  const dispatch = useDispatch();
  const [sent, setSent] = useState(false);
  const [valuess, setValues] = useState({
    title: dataModal.title,
    reason: dataModal.reason,
    description: dataModal.description,
    goal: dataModal.goal,
    image: dataModal.image,
  });

  useEffect(() => {
    setValues({
      title: dataModal.title,
      reason: dataModal.reason,
      description: dataModal.description,
      goal: dataModal.goal,
      image: dataModal.image,
    });
  }, [dataModal]);

  const checkChange = (e) => {
    setValues({ ...valuess, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.modalUser}>
      <Formik
        initialValues={valuess}
        validate={(values) => {
          let errors = {};
          if (!valuess.title) errors.title = "Por favor ingresa un título";
          else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]*$/.test(valuess.title))
            errors.title = "Título inválido";
          else if (/^\s/.test(valuess.title))
            errors.title = "El título no puede empezar con espacios en blanco";
          else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{10,45}$/.test(valuess.title))
            errors.title = "Debe tener entre 10 y 45 carácteres";

          if (!valuess.reason) errors.reason = "Por favor ingresa una causa";
          else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]*$/.test(valuess.reason))
            errors.reason = "Causa inválida";
          else if (/^\s/.test(valuess.reason))
            errors.reason = "La causa no puede empezar con espacios en blanco";
          else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{10,150}$/.test(valuess.reason))
            errors.reason = "Debe tener entre 10 y 150 carácteres";

          if (!valuess.description)
            errors.description = "Por favor haz una decripción";
          else if (/^\s/.test(valuess.description))
            errors.description =
              "La descripción no puede empezar con espacios en blanco";
          else if (valuess.description.length < 30)
            errors.description =
              "Por favor escribe una descripcion más detallada (30 caracteres al menos)";

          if (!valuess.goal) errors.goal = "Por favor ingresa una meta";
          else if (valuess.goal <= 0)
            errors.goal = "La meta no puede ser igual o menor a 0";
          else if (!/^[0-9]*$/.test(valuess.goal))
            errors.goal = "Tiene que ser un número";
          else if (!/^[0-9]{1,9}$/.test(valuess.goal))
            errors.goal = "Debe tener entre 1 y 9 dígitos";
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(updateCampaignAdm(dataModal.id, valuess));
          resetForm();
          setSent(true);
          setTimeout(() => setSent(false), 2000);
          swal({
            title: "Congratulations!",
            text: "La campaña ha sido editada con exito",
            icon: "success",
            button: "Ok",
          }).then(() => setModalEditCampaign(false));
        }}
        validateOnMount
      >
        {({ errors, setFieldValue }) => (
          <div className={styles.container}>
            <Form className={styles.form}>
              <label>Edicion de la campaña</label>
              <br />
              <div className={styles.divinput}>
                <label htmlFor="">Titulo : </label>
                <br />
                <Field
                  className={styles.input}
                  type="text"
                  name="title"
                  onChange={checkChange}
                  value={valuess.title}
                ></Field>
                <ErrorMessage
                  name="title"
                  component={() => (
                    <div className={styles.error}>{errors.title}</div>
                  )}
                />
              </div>
              <div className={styles.divinput}>
                <label htmlFor="">Razon : </label>
                <br />
                <Field
                  className={styles.input}
                  type="text"
                  name="reason"
                  onChange={checkChange}
                  value={valuess.reason}
                ></Field>
                <ErrorMessage
                  name="reason"
                  component={() => (
                    <div className={styles.error}>{errors.reason}</div>
                  )}
                />
              </div>
              <div className={styles.divinput}>
                <label htmlFor="">Descripcion : </label>
                <br />
                <Field
                  // className={styles.input}
                  type="text"
                  name="description"
                  as="textarea"
                  rows="7"
                  cols="50"
                  onChange={checkChange}
                  value={valuess.description}
                  maxLength="255"
                ></Field>
                <ErrorMessage
                  name="description"
                  component={() => (
                    <div className={styles.error}>{errors.description}</div>
                  )}
                />
              </div>
              <div className={styles.divinput}>
                <label htmlFor="">Meta : </label>
                <br />
                <Field
                  className={styles.input}
                  type="number"
                  name="goal"
                  onChange={checkChange}
                  value={valuess.goal}
                ></Field>
                <ErrorMessage
                  name="goal"
                  component={() => (
                    <div className={styles.error}>{errors.goal}</div>
                  )}
                />
              </div>
              <div className={styles.divinput}>
                <label htmlFor="">Imagen de Perfil : </label>
                <br />
                <img
                  className={styles.imagen}
                  src={valuess.image}
                  alt={valuess.name}
                />
                <br />
                <label>Deseas cambiar la foto actual?</label>
                <div className={styles.divinput}>
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
                        setValues({
                          ...valuess,
                          image: fileInfo.cdnUrl,
                        });
                      });
                    }}
                    onChange={(file) => {
                      setFieldValue("image", file);
                    }}
                  />
                </div>
              </div>
              {sent && (
                <p className={styles.exito}>Formulario enviado con exito!</p>
              )}
              <div className={styles.buttons}>
                <button className={styles.button} type="submit">
                  Aceptar Cambios
                </button>
                <button
                  className={styles.button}
                  onClick={() => setModalEditCampaign(false)}
                >
                  Cerrar
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default EditCampaign;
