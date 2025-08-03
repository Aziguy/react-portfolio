import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import './contact.css';

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: '' });

    emailjs.sendForm('service_up9t38v', 'template_qm1num3', form.current, {
      publicKey: 'Pbi1rXkWuDv5H6gKR',
    }).then(() => {
        setStatus({ loading: false, success: true, message: 'Message sent successfully!' });
        e.target.reset();
      }, (error) => {
        setStatus({ loading: false, success: false, message: 'Failed to send. Please try again later.' });
        console.error(error.text);
      });
  };

  const contactOptions = [
    {
      icon: <MdOutlineEmail className="contact__option-icon" />,
      title: 'Email',
      detail: 'particulierssm@gmail.com',
      link: 'mailto:particulierssm@gmail.com'
    },
    {
      icon: <RiMessengerLine className="contact__option-icon" />,
      title: 'Messenger',
      detail: 'hippolyte.kengni',
      link: 'https://m.me/hippolyte.kengni'
    },
    {
      icon: <IoLogoWhatsapp className="contact__option-icon" />,
      title: 'WhatsApp',
      detail: '+237 686 777 838',
      link: 'https://api.whatsapp.com/send?phone=237686777838'
    }
  ];

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contactOptions.map((option, index) => (
            <article key={index} className="contact__option">
              {option.icon}
              <h4>{option.title}</h4>
              <h5>{option.detail}</h5>
              <a href={option.link} target='_blank' rel='noreferrer'>Send a message</a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          {status.message && (
            <p className={`contact__status ${status.success ? 'success' : 'error'}`}>
              {status.message}
            </p>
          )}
          <input type="text" name="name" placeholder="Your full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary" disabled={status.loading}>
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}