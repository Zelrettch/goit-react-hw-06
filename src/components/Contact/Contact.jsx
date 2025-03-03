import css from "./Contact.module.css";

import { FaPhone } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";

export default function Contact({ data, onDelete }) {
  return (
    <li className={css.contact}>
      <div>
        <div className={css.contactTextInfo}>
          <FaPhone size="15" />
          <p>{data.name}</p>
        </div>
        <div className={css.contactTextInfo}>
          <FaUserLarge size="15" />
          <p>{data.number}</p>
        </div>
      </div>
      <button
        type="button"
        className={css.delBtn}
        onClick={() => onDelete(data.id)}
      >
        Delete
      </button>
    </li>
  );
}
