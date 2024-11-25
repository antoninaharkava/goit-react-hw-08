

import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";

import { addContact } from "../../redux/contacts/operations";
import s from "./ContactForm.module.css";


const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Name is required"),
  number: Yup.string() 
    .matches(/^\+?\d{1,4}?[\d\s()-]{3,}$/, "Invalid phone number")
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Phone number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const contact = {
      name: values.name,
      number: values.number, 
    };
    dispatch(addContact(contact)).then(() => {
      toast.success("Contact added successfully!", {
        position: "top-right",
      });
    });
    actions.resetForm(); 
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "", 
      }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label} htmlFor="name">
          Name:
          <Field
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            className={s.input}
          />
          <ErrorMessage name="name" component="div" className={s.error} />
        </label>

        <label className={s.label} htmlFor="number">
          Phone:
          <Field
            type="tel"
            name="number" 
            id="number"
            placeholder="+XXX (XX) XXX-XXXX"
            className={s.input}
          />
          <ErrorMessage name="number" component="div" className={s.error} />
        </label>

        <button type="submit" className={s.btnAddC}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
