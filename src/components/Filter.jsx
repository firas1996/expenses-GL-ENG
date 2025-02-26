import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter">
      <label>Filter By Year :</label>
      <select>
        <option>2023</option>
        <option>2024</option>
      </select>
    </div>
  );
};

export default Filter;
