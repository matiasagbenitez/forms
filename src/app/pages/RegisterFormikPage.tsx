import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        onSubmit={(values) => {
          console.log({ values });
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Debe de tener 3 caracteres o más")
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("El nombre es requerido"),

          email: Yup.string()
            .email("El correo no tiene un formato válido")
            .required("El correo es requerido"),

          password: Yup.string()
            .min(8, "Debe de tener 8 caracteres o más")
            .required("La contraseña es requerida"),

          repeatPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Las contraseñas no son iguales")
            .required("La contraseña es requerida"),
        })}
      >
        {({handleReset}) => (
          <Form>
            <MyTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="John"
            />
            <MyTextInput
              label="Email address"
              name="email"
              type="email"
              placeholder="john@email.com"
            />
            <MyTextInput
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <MyTextInput
              label="Repeat password"
              name="repeatPassword"
              type="password"
              placeholder="Repeat password"
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset form</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
