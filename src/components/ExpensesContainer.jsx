import { useState } from "react";
import Chart from "./Chart";
import ExpenseElement from "./ExpenseElement";
import "./ExpensesContainer.css";
import Filter from "./Filter";

const ExpensesContainer = ({ data }) => {
  const years = [
    "All",
    ...new Set(data.map((el) => el.date.getFullYear()).sort()),
  ];
  const [expenses, setExpenses] = useState(years[0]);
  const x = data.filter((item) => {
    return expenses == "All" ? true : item.date.getFullYear() == expenses;
  });
  console.log(x);
  return (
    <div className="expenses">
      <Filter years={years} expenses={expenses} setExpenses={setExpenses} />
      <Chart data={x} />
      {x.map((item) => {
        return (
          <ExpenseElement
            key={item.id}
            title={item.title}
            price={item.price}
            date={item.date}
          />
        );
      })}
    </div>
  );
};

export default ExpensesContainer;
