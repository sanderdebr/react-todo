import React from 'react';
import ToDo from './ToDo.jsx';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

const ToDoList = props => {
    return (
        <Table className="table">
            <TableHead>
                <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>ToDo</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    // Map want forEach werkt niet
                    props.todos.map((todo, index) => 
                        <ToDo 
                            key={todo.id} 
                            id={todo.id} 
                            status={todo.status} 
                            handleStatus={props.handleStatus} 
                            updated={props.updated} 
                            updateToDo={props.updateToDo} 
                            openDialog={props.openDialog}
                            date={todo.date} 
                            title={todo.title} 
                        />
                    )
                }

            </TableBody>
        </Table>
    );
}

export default ToDoList;