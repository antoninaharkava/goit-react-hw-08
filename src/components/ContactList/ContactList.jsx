

import { useSelector } from "react-redux";

import Contact from "../Contact/Contact.jsx";

import { selectFilteredContacts } from "../../redux/contacts/selectors.js";

import css from "./ContactList.module.css";

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;