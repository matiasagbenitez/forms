import {
  BrowserRouter,
  NavLink,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import {
  DynamicForm,
  RegisterPage,
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
  FormikAbstraction,
  RegisterFormikPage,
} from "../app/pages";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="Logo de React" />
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                RegisterPage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                FormikBasicPage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                FormikYupPage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                FormikComponents
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstraction"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                FormikAbstraction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register-formik"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                RegisterFormikPage
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dynamic-form"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                DynamicForm
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponents />} />
          <Route path="/formik-abstraction" element={<FormikAbstraction />} />
          <Route path="/register-formik" element={<RegisterFormikPage />} />
          <Route path="/dynamic-form" element={<DynamicForm />} />
          <Route path="*" element={<Navigate to="/register" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
