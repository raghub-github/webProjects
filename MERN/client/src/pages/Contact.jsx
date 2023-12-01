import { useState } from "react";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img
              src="/images/support.png"
              alt="we are always ready to help you"
            />
          </div>
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  required
                  onChange={handleInput}
                  value={contact.username}
                />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  required
                  onChange={handleInput}
                  value={contact.email}
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  autoComplete="off"
                  required
                  id="message"
                  cols="30"
                  rows="3"
                  onChange={handleInput}
                  value={contact.message}
                ></textarea>
              </div>
              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>
        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d114748.2169537054!2d87.47558792516789!3d21.947620190674698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDU1JzUwLjAiTiA4N8KwMjcnMzYuNyJF!5e0!3m2!1sen!2sin!4v1701435818595!5m2!1sen!2sin"
            width="97%"
            height="450"
            allowFullscreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ margin: "auto", display: "block"}}
          ></iframe>
        </section>
      </section>
    </>
  );
};
