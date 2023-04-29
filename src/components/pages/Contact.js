import React, { useState } from "react";

const InputField = ({ label, type, name, value, onChange, required, feedback }) => {
  const [showError, setShowError] = useState(false);

  const handleBlur = () => {
    setShowError(!value);
  };

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        className={`form-control ${showError ? 'is-invalid' : ''}`}
        placeholder={`Enter your ${label}`}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        required={required}

      />
      {showError && <div className="invalid-feedback">{feedback}</div>}
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [validated, setValidated] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(false);
    setFormSent(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setFormSent(false);
    }, 3000);
  };

  return (
    <section className="page-wrap">
      <h2>Contact</h2>
      <form noValidate validated={validated} onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required={true}
          feedback="Enter your name"
        />
        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required={true}
          feedback="Enter a valid email address"
        />
        <InputField
          label="Message"
          type="textarea"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required={true}
          feedback="Enter your message"
        />
        <button type="submit" className="btn btn-primary">
          Submit your Form here
        </button>
      </form>
      {formSent && (
        <div className="alert alert-success" role="alert">
          Form submitted successfully!
        </div>
      )}
    </section>
  );
};

export default ContactForm;