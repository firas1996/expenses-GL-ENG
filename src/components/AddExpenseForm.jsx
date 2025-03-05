import { useState } from "react";
import "./AddExpenseForm.css";

const AddExpenseForm = () => {
  const date = new Date().getFullYear();
  const mindate = `${date - 2}-01-01`;
  const maxdate = `${date + 2}-12-31`;
  const [data, setData] = useState({ title: "", price: "", date: "" });
  const onChange = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setData({ title: "", price: "", date: "" });
  };

  return (
    <div className="add-expense">
      <form onSubmit={onSubmit}>
        <div className="add-expense__controls">
          <div className="add-expense__control">
            <label>Title</label>
            <input
              placeholder="Title"
              required
              name="title"
              onChange={onChange}
              value={data.title}
            />
          </div>
          <div className="add-expense__control">
            <label>Price</label>
            <input
              placeholder="Price"
              required
              type="number"
              min={0}
              step={0.01}
              name="price"
              onChange={onChange}
              value={data.price}
            />
          </div>
          <div className="add-expense__control">
            <label>Date</label>
            <input
              placeholder="Date"
              required
              type="date"
              min={mindate}
              max={maxdate}
              name="date"
              onChange={onChange}
              value={data.date}
            />
          </div>
        </div>
        <div className="add-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseForm;
