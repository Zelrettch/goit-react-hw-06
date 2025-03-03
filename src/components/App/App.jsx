import css from "./App.module.css";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const CONTACTS_STORAGE_KEY = "contacts";

export default function App() {
  const [searchFilter, setSearchFilter] = useState("");
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem(CONTACTS_STORAGE_KEY)) ?? [];
  });

  function addContact(name, number) {
    setContacts([...contacts, { name, number, id: nanoid() }]);
  }

  function deleteContact(id) {
    const filtered = contacts.filter((e) => e.id !== id);
    setContacts(filtered);
  }

  useEffect(() => {
    window.localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((e) => {
    return e.name.toLowerCase().includes(searchFilter);
  });
  return (
    <div className={css.phonebook}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox setSearchFilter={setSearchFilter}></SearchBox>
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}
