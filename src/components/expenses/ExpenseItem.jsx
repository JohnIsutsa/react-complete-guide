import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    // useState allows you to define values as state, where changes in those values results in a re-render of the component
    // it has to be called inside the component function
    // useState registers state for the component in which it is being called and only that component
    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle('Updated!')
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
};

export default ExpenseItem;
