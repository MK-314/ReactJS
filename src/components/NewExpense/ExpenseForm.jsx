import './ExpenseForm.css';
var ExpenseForm = () => {
  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__controls"></div>
        <label htmlFor="">Title</label>
        <input type="text"/>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__controls"></div>
        <label htmlFor="">Amount</label>
        <input type="number" min="0.01" step="0.01"/>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__controls"></div>
        <label htmlFor="">Amount</label>
        <input type="date" min="2019-01-01" step="2022-01-01"/>
      </div>
      <div className="new-expense__actions">
          <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;