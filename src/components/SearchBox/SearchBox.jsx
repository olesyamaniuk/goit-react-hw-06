import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterVal = useSelector((state) => state.filter.value);

  const handleFilter = (e) => dispatch(filterContacts(e.target.value));

  return (
    <div>
      <label> Find contact by name:</label>
      <input
        type="text"
        name="filter"
        placeholder="Enter name to filter"
        value={filterVal}
        onChange={handleFilter}
      />
    </div>
  );
}