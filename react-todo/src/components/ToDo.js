import React from 'react';

const ToDo = ({ todo, onDeleteClick }) => {

    // const handleClick = (e) => {
    //     e.preventDefault()
    //     console.log(todo.id + todo.toDoTitle)
    // }

    return (
        <div id="todo-item" key={todo.id + todo.toDoTitle} >
            <h1>{todo.toDoTitle}</h1>
            <p>{todo.content}</p>
            <button id="todo-btn" onClick={() => onDeleteClick(todo.id)}>Completed</button>
        </div>
    );
};

export default ToDo;