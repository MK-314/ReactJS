import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';


var NewExpense = (props)=>{
const [isEditing, setisEditing] = useState(false);
    var saveExpenseDataHandler = (enteredExpenseData)=>{
        var expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setisEditing(false);
    }
    const startEditingHandler = () =>{
        setisEditing(true);
    }
    const stopEditingHandler = () =>{
        setisEditing(false);
    }
    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
}

export default NewExpense;