import {useState} from 'react';
import './Expenses.css';
import Card from './../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses({expenses}) {
  var [filteredYear,
    setFilteredYear] = useState('2020');
  var filterHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  var filteredByYear = expenses.filter(element => element.date.getFullYear().toString() === filteredYear);


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onCustomFilter={filterHandler}/>
        <ExpensesList items={filteredByYear}/>
      </Card>
    </div>
  );
}

export default Expenses;