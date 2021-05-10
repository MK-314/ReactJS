import './ExpenseForm.css';
import {useState} from 'react';
var ExpenseForm = (props) => {
  var [enteredTitle,    setEnteredTitle] = useState('');
  var [enteredAmount,    setEnteredAmount] = useState('');
  var [enteredDate,    setEnteredDate] = useState('');

  var titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  var amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  var dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  var submitHandler = (event) => {
    event.preventDefault();
    var expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__controls"></div>
        <label htmlFor="">Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <div className="new-expense__controls"></div>
        <label htmlFor="">Amount</label>
        <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <div className="new-expense__control"></div>
        <label htmlFor="">Date</label>
        <input
          type="date"
          min="2019-01-01"
          step="2022-12-12"
          value={enteredDate}
          onChange={dateChangeHandler}/>
      </div>
      <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;