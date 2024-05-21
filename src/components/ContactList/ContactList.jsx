import Contact from "../Contact/Contact";
import {useSelector} from "react-redux";

export default function ContactList() {
  const { items } = useSelector((state) => state.contacts);
  const { filter } = useSelector((state) => state.filter);
  const filterArray = items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {filterArray.map(({ name, number, id }) => (
        <li key={id}>
          <Contact key={id} name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
}