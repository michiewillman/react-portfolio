import React, { useState } from "react";

function Contact() {
  // Set initial state values for inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Rerender when any of the inputs are changed
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // When name of input matches name of event target, set state to the value user types in
    switch (name) {
      case "name": {
        return setName(value);
      }
      case "email": {
        return setName(value);
      }
      case "subject": {
        return setName(value);
      }
      case "message": {
        return setName(value);
      }
      default: {
        return setName(value);
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    return <p>Your message has been sent to Michie!</p>;
  };

  return (
    <div>
      <form>
        <div className="input-section">
          <label for="name">Name</label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Make thyself known"
          />
        </div>
        <div className="input-section">
          <label for="email">Email</label>
          <input
            value={email}
            email="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter thy email address"
          />
        </div>
        <div className="input-section">
          <label for="subject">Subject</label>
          <input
            value={subject}
            subject="subject"
            onChange={handleInputChange}
            type="text"
            placeholder="Thou mustn't exceed 40 characters"
          />
        </div>
        <div className="input-section">
          <label for="message">Message</label>
          <input
            value={message}
            message="message"
            onChange={handleInputChange}
            type="text"
            placeholder="The gummed envelope, without a seal is perfectly correct, but a neat seal of red sealing-wax always gives a refined look to a letter and is a desirable adjunct thereto…If the writer is in mourning black sealing wax should, of course, be used, but no other colors except black and red are good form.

            But who cares?"
          />
        </div>
        <button type="submit" onClick={handleFormSubmit}></button>
      </form>
    </div>
  );
}

export default Contact;
