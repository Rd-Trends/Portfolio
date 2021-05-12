import React, { useState } from "react";
import style from "./Contact.module.css";
import Title from "../Title";
import FadeIn from "../Animation/FadeIn";

const Contact = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let [success, setSuccess] = useState(false);
  let [btnDisabled, setBtnDisabled] = useState(false);

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnDisabled(true);

    const url = "http://localhost:4000";

    const emailContent = { name, email, message };

    const response = await fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(emailContent),
    });

    const responseMessage = await response.json();

    if (response.status === 200) {
      setSuccess(true);
      setBtnDisabled(false);
      return;
    }
  };

  const hideModal = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSuccess(false);
  };

  return (
    <>
      <FadeIn duration={0.5} startPosition={50} endPosition={0}>
        <div id="Contact" className={style.wrapper}>
          <div className={style.formtitle}>
            <Title title="Connect" />
            <p>
              I love connecting with people, and i'm open to new oppurtunties,
              if you want to easily reach out to me, you're just a click away!
            </p>
          </div>
          <div className={style.formcontainer}>
            <div className={style.info}>
              <div className={style.contact}>
                <p className={style.title}>Phone</p>
                <p className={style.detail}>+2348161827754</p>
              </div>
              <div className={style.contact}>
                <p className={style.title}>E-mail</p>
                <p className={style.detail}>dannirolands@gmail.com</p>
              </div>
              <div className={style.contact}>
                <p className={style.title}>Address</p>
                <p className={style.detail}>Delta State, Nigeria</p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Name"
                value={name}
                onChange={onNameChange}
              />
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="E-mail"
                value={email}
                onChange={onEmailChange}
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                value={message}
                onChange={onMessageChange}
                required
              ></textarea>
              <button
                type="submit"
                className={style.submitbtn}
                disabled={btnDisabled}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </FadeIn>
      {success && (
        <div className={style.modal}>
          <div className={style.content}>
            <p>Thanks {name}</p>
            <p>Your message was delivered successfully</p>
            <button disabled={btnDisabled} onClick={hideModal}>
              ok
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
