import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';

import styles from './ContactForm.module.scss';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import ErrorBox from '../atoms/ErrorBox';
import ReCaptchaBox from '../atoms/ReCaptchaBox';
import reCaptcha from '../../utils/reCaptcha';
import sendEmail from '../../utils/sendEmail';

const ContactForm = () => {
  return (
    <>
      <h2>Napisz do nas!</h2>
      <Formik
        initialValues={{email: '', message: ''}}
        validate={(values) => {
          const errors = {};
          if (!values.email) errors.email = 'Adres e-mail jest wymagany';
          else if (!/^.+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
            errors.email = 'Nieprawidłowy adres e-mail';

          if (!values.message) errors.message = 'Wpisz wiadomość';

          return errors;
        }}
        onSubmit={(values, {resetForm}) => {
          if (reCaptcha.validationPassed) {
            sendEmail(values.email, values.message);
            resetForm();
          }
        }}
      >
        {({isSubmitting}) => (
          <Form className={styles.form}>
            <Field
              name="email"
              as={Input}
              type="text"
              placeholder="Podaj swój e-mail"
            />
            <ErrorBox>
              <ErrorMessage name="email" />
            </ErrorBox>
            <Field
              name="message"
              as={TextArea}
              rows="10"
              placeholder="Treść wiadomości"
            />
            <ErrorBox>
              <ErrorMessage name="message" />
            </ErrorBox>

            <ReCaptchaBox
              onChange={(userToken) => reCaptcha.validate(userToken)}
            />

            <Button type="submit" disabled={isSubmitting}>
              Wyślij
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
