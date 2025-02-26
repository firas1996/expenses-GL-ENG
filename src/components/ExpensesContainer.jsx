import Chart from "./Chart";
import ExpenseElement from "./ExpenseElement";
import "./ExpensesContainer.css";
import Filter from "./Filter";

const ExpensesContainer = ({ data }) => {
  const years = [
    "All",
    ...new Set(data.map((el) => el.date.getFullYear()).sort()),
  ];
  console.log(years);
  return (
    <div className="expenses">
      <Filter years={years} />
      <Chart data={data} />
      {data.map((item) => {
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
