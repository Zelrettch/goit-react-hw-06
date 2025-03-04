import css from "./ContactList.module.css";

import Contact from "../Contact/Contact.jsx";
import { useSelector, useStore } from "react-redux";
import { useMemo } from "react";

export default function ContactList({}) {
  const items = useSelector((s) => s.contacts.items);
  const filter = useSelector((s) => s.filter);
  const filtered = useMemo(() => {
    return items.filter((e) => e.name.toLowerCase().includes(filter));
  }, [items, filter]);

  return (
    <ul className={css.contactList}>
      {filtered.map((e) => (
        <Contact data={e} key={e.id} />
      ))}
    </ul>
  );
}
