import React, { useState } from "react";

import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [query, setQuery] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    fetch("https://getform.io/f/akkkknoa", {
      method: "POST",
      body: formData,
    }).then(() =>
      setQuery({ firstName: "", lastName: "", email: "", message: "" })
    );
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={formSubmit}>
          <div>
            <label>First name</label>
            <input
              id="firstNameField"
              type="text"
              name="firstName"
              required
              placeholder="Please type here your first name"
              className="form-control"
              value={query.firstName}
              onChange={handleParam()}
            />
          </div>

          <div>
            <label>Last name</label>
            <input
              id="lastNameField"
              type="text"
              name="lastName"
              required
              placeholder="Please type here your last name"
              className="form-control"
              value={query.lastName}
              onChange={handleParam()}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              id="emailField"
              type="email"
              name="email"
              required
              placeholder="Please type here your email"
              className="form-control"
              value={query.email}
              onChange={handleParam()}
            />
          </div>

          <div>
            <label>Message</label>
            <textarea
              id="messageField"
              name="message"
              required
              placeholder="Please type here your message"
              className="form-control"
              value={query.message}
              onChange={handleParam()}
            />
          </div>

          <input id="sendButton" type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  );
}
