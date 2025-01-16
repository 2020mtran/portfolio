import React from 'react';
import ContactMeSubContainer from '../components/ContactMeSubContainer.jsx';
import ContactMeHeader from '../components/ContactMeHeader.jsx';
import ContactMeForm from '../components/ContactMeForm.jsx';

const ContactMePage = () => (
  <>
    <ContactMeSubContainer>
      <ContactMeHeader></ContactMeHeader>
      <ContactMeForm></ContactMeForm>
    </ContactMeSubContainer>
  </>
);

export default ContactMePage;
