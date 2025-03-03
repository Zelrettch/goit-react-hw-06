import css from "./ContactList.module.css";

import Contact from "../Contact/Contact.jsx";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contactList}>
      {contacts.map((e) => (
        <Contact data={e} key={e.id} onDelete={onDelete} />
      ))}
    </ul>
  );
}
