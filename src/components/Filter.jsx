import "./Filter.css";

const Filter = ({ years }) => {
  return (
    <div className="filter">
      <label>Filter By Year :</label>
      <select>
        {years.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
