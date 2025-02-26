import Chart from "./Chart";
import ExpenseElement from "./ExpenseElement";
import "./ExpensesContainer.css";

const ExpensesContainer = ({ data }) => {
  return (
    <div className="expenses">
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
