import './ExpenseDate.css';
function ExpenseDate({date}){
    var month =date.toLocaleString('en-US',{month:'long'});
    var day =date.toLocaleString('en-US',{day:'2-digit'});
    var year =date.getFullYear();
    return(
        <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
      </div>
    );
}

export default ExpenseDate;