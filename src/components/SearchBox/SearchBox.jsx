import css from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox({ setSearchFilter }) {
  const filterId = useId();
  return (
    <div className={css.searchBlock}>
      <label htmlFor={filterId} className={css.caption}>
        Find Contacts by name
      </label>
      <input
        className={css.field}
        type="text"
        name="filter"
        id={filterId}
        onInput={(e) => {
          setSearchFilter(e.target.value.trim().toLowerCase());
        }}
      />
    </div>
  );
}
