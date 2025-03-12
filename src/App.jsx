import React, { useState } from "react";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpensesContainer from "./components/ExpensesContainer";

function App() {
  const oldData = [
    {
      id: 1,
      title: "New TV",
      price: 200,
      date: new Date("2025-02-12"),
    },
    {
      id: 2,
      title: "Nike Air Force",
      price: 300,
      date: new Date("2023-10-22"),
    },
    {
      id: 3,
      title: "Phone",
      price: 500,
      date: new Date("2025-05-12"),
    },
    {
      id: 4,
      title: "Education",
      price: 150,
      date: new Date("2024-02-25"),
    },
    {
      id: 5,
      title: "Education",
      price: 150,
      date: new Date("2027-02-25"),
    },
  ];
  const [data, setData] = useState(oldData);
  const getExpense = (newData) => {
    setData([newData, ...data]);
  };
  return (
    <>
      <AddExpenseForm getExpense={getExpense} nbr={data.length} />
      <ExpensesContainer data={data} />
    </>
  );
}

export default App;
