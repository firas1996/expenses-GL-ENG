import "./Filter.css";

const Filter = ({ years, expenses, setExpenses }) => {
  return (
    <div className="filter">
      <label>Filter By Year :</label>
      <select
        value={expenses}
        onChange={(event) => {
          setExpenses(event.target.value);
        }}
      >
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
