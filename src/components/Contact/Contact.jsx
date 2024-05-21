import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <p>
          {name}
        </p>
        <p>
          {number}
        </p>
      </div>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}