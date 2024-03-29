import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // useState allows you to define values as state, where changes in those values results in a re-render of the component
    // it has to be called inside the component function
    // useState registers state for the component in which it is being called and only that component
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    // If your state update depends on the previous state, use the function form of useState

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // })

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
        console.log(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         title: event.target.value
        //     }
        // })
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
        console.log(event.target.value)
        // setUserInput({
        //     ...userInput, 
        //     amount: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         amount: event.target.value
        //     }
        // })
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
        console.log(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         date: event.target.value
        //     }
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }

        props.onSaveExpenseData(expenseData)

        // Clear the form after submission using two-way binding
        setTitle('')
        setAmount('')
        setDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input value={title} type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input value={amount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input value={date} type="date" min="2020-01-01" max="2024-12-31" onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
