import React, { useState } from "react";
import Modal from "react-modal";
import emailjs from "emailjs-com";
import "./MessageModal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
  },
};

Modal.setAppElement("#root");

const MessageModal = ({ modalIsOpen, closeModal }) => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "564315",
        "template_momv75k",
        e.target,
        "user_PNtqALGQ9RyfIStQWc7vX"
      )
      .then(
        (result) => {
          alert("Mail send successfully");
          // e.target.value = " ";
          closeModal();

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

{/* <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}







        <form 
        onSubmit={sendEmail}
        >
          <div className="form-group">
            <input
              required
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="form-group">
            <input
              required
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="form-control"
              id="name"
            />
          </div>
          <div className="form-group">
            <input
              required
              type="text"
              name="subject"
              placeholder="Enter Your Subject"
              className="form-control"
              id="subject"
            />
          </div>
          <div className="form-group">
            <textarea
              required
              className="form-control"
              name="message"
              id="textarea"
              cols="20"
              rows="6"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default MessageModal;
