import React, { useState } from "react";
import Modal from "react-modal";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
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
  const { register,handleSubmit, errors } = useForm();
  
  const onSubmit = data => {
    console.log(data)
    emailjs.send('564315','template_momv75k', data, 'user_PNtqALGQ9RyfIStQWc7vX')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });    
  }
 
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <form 
        onSubmit={handleSubmit(onSubmit)}
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
              ref={register({ required: true })}
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="form-control"
              id="name"
            />
          </div>
          <div className="form-group">
            <input
              ref={register({ required: true })}
              type="text"
              name="subject"
              placeholder="Enter Your Subject"
              className="form-control"
              id="subject"
            />
          </div>
          <div className="form-group">
            <textarea
              ref={register({ required: true })}
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
