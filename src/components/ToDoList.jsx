import React from 'react';
import ToDo from './ToDo.jsx';

const ToDoList = props => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>ToDo</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    // Map want forEach werkt niet
                    props.todos.map((todo, index) => 
                        <ToDo key={index} date={todo.date} title={todo.title} />
                    )
                }

            </tbody>
        </table>
    );
}

export default ToDoList;