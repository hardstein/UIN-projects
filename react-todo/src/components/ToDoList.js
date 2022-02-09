import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDoList, onDeleteClick }) => {
    return (
        <section id="todos">
            <div className="grid-wrapper">
                {toDoList.map(todo => {
                    return (
                        <ToDo todo={todo} onDeleteClick={onDeleteClick} />)
                })}
            </div>
        </section>
    );
};

export default ToDoList;