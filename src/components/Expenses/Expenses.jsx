import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses({expenses}){
    var [filteredYear, setFilteredYear] = useState('2020');
    var filterHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    }
    var filteredByYear = expenses.filter(element=>element.date.getFullYear().toString() === filteredYear);
    return(
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onCustomFilter={filterHandler}/>
                {/* {expenses.map(expenses => <ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date}></ExpenseItem>)} */}
                {filteredByYear.map(expenses => <ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date}></ExpenseItem>)}
            </Card>
        </div>
    );
}

export default Expenses;