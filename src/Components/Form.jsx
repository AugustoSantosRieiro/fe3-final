import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    submitted: false,
    message: "",
    touched: {
      name: false,
      email: false,
    },
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const handleBlur = ({ target }) => {
    const { name } = target;
    setForm({
      ...form,
      touched: {
        ...form.touched,
        [name]: true,
      },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setForm((prev) => ({
      ...prev,
      submitted: true,
      message: "Gracias " + prev.name + " te contactaremos cuanto antes a través de un mensaje de Email",
    }));
  };

  return (
    <div style={{ height: "100vh" }}>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Nombre Completo</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {form.touched.name && form.name.trim().length <= 5 && (
          <span style={{ color: "red" }}>Este campo es obligatorio</span>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {form.touched.email && !isValidEmail(form.email) && (
          <span style={{ color: "red" }}>Verificar el formato de email</span>
        )}
        <button type="submit">Enviar</button>
      </form>
      {form.submitted && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
          <h2>{form.message}</h2>
        </div>
      )}
    </div>
  );
};

export default Form;
