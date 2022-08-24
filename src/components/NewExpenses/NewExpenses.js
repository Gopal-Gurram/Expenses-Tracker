import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const [isEditing, SetisEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startChangingHandler = () => {
    SetisEditing(true);
  };
  const stopChangingHandler = () => {
    SetisEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startChangingHandler}>Add New Expenses</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopChangingHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
