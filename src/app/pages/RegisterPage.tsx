import { FormEvent } from "react";
import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const initialForm = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
  const {
    formData,
    name,
    email,
    password,
    repeatPassword,
    onChange,
    resetForm,
    isValidEmail,
  } = useForm(initialForm);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>RegisterPage</h1>

      <hr />

      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Emaill"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) ? "has-error" : ""}`}
        />
        {!isValidEmail(email) && <span>Email is not valid</span>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Repeat password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={onChange}
        />

        <button type="submit">Register</button>
        <button type="button" onClick={resetForm}>
          Reset form
        </button>
      </form>
    </div>
  );
};
