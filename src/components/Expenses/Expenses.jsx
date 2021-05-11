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
    var returnArr = [];
    return(
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onCustomFilter={filterHandler}/>
                {/* {expenses.map(expenses => <ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date}></ExpenseItem>)} */}
                {expenses.forEach(element => {
                    if(element.date.getFullYear().toString() === filteredYear){
                        returnArr.push(<ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date}></ExpenseItem>);
                    }
                })}
                {returnArr}
            </Card>
        </div>
    );
}

export default Expenses;