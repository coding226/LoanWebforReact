import React from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import { contact } from "../consts/contact";


const StyledContainer = styled.div`
  padding: 2rem 0;
  h3 {
    text-align: center;
  }
  p {
    margin-bottom: 2rem;
  }
`;

function Contact() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <StyledContainer>
      <h3 className="contact-title mb-4">{contact.title}</h3>
      <div className="contact-content">
        {contact.descriptions.map((description, index) => {
          return <p key={index}> {description} </p>;
        })}

        <p>
          Additional questions or comments?
          <br /> <strong>Email us</strong>{" "}
          <a href="mailto:help@gotloaned.com">help@gotloaned.com</a>{" "}
        </p>
        <p>or fill out the form below</p>
      </div>
      <ContactForm />
    </StyledContainer>
  );
}

export default Contact;
