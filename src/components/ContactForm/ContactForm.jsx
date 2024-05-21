import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min 3 characters!!!")
    .max(50, "Max 50 characters!!!")
    .required("Is required!!!"),
  number: Yup.string()
    .min(3, "Min 3 characters!!!")
    .max(50, "Max 50 characters!!!")
    .required("Is required!!!"),
});

export default function ContactForm() {
  const checkContactExists = (items, name) => {
    return items.some((el) => el.name.toLowerCase() === name.toLowerCase());
  };

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.contacts);
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    if (checkContactExists(items, name)) {
      alert(`${name} is already a contact`);
      resetForm();
    } else {
      dispatch(
        addContact({
          id: nanoid(),
          name,
          number,
        })
      );
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">
            Name
          </label>
          <Field
            name="name"
            id="name"
            placeholder="Enter name"
          />
          <ErrorMessage name="name" component="span" />
        </div>

        <div>
          <label htmlFor="number">
            Number
          </label>
          <Field
            name="number"
            id="number"
            placeholder="Enter number"
          />
          <ErrorMessage name="number" component="span" />
        </div>
        
        <button type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}