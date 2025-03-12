import { useState } from "react";
import "./AddExpenseForm.css";

const AddExpenseForm = ({ getExpense, nbr }) => {
  const x = nbr + 1;
  const date = new Date().getFullYear();
  const mindate = `${date - 2}-01-01`;
  const maxdate = `${date + 2}-12-31`;
  const [data, setData] = useState({ title: "", price: "", date: "" });
  const [showForm, setShowForm] = useState(false);
  const onChange = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    getExpense({
      id: x,
      title: data.title,
      price: data.price * 1,
      date: new Date(data.date),
    });
    setData({ title: "", price: "", date: "" });
  };
  // const openFormHandler = () => {
  //   setShowForm(true);
  // };
  // const closeFormHandler = () => {
  //   setShowForm(false);
  // };
  const showFormHandler = () => {
    // // 1)
    // if (showForm) {
    //   setShowForm(false);
    // } else {
    //   setShowForm(true);
    // }
    // // 2)
    // setShowForm(showForm ? false : true);
    // 3)
    setShowForm(!showForm);
  };
  return (
    <div className="add-expense">
      {showForm ? (
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
            <button onClick={showFormHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default AddExpenseForm;
