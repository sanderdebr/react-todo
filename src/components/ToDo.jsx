import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const ToDo = props => {

    const showToDo = status => {
        if (status == true) {
            return  (
                <>
                    <TableCell>
                        <Checkbox onClick={props.handleStatus} checked={props.status} />
                    </TableCell>
                    <TableCell className="disabled">{props.date}</TableCell>
                    <TableCell>
                        <TextField type="text" disabled onBlur={props.updated} onChange={props.updateToDo} defaultValue={props.title} />
                    </TableCell>
                    <TableCell>
                        <DeleteIcon onClick={props.openDialog} color="secondary" />
                    </TableCell>
                </>
            );
        } else {
            return (
                <>
                    <TableCell>
                        <Checkbox onClick={props.handleStatus} checked={props.status} />
                    </TableCell>
                    <TableCell>{props.date}</TableCell>
                    <TableCell>
                        <TextField type="text" onBlur={props.updated} onChange={props.updateToDo} defaultValue={props.title} />
                    </TableCell>
                    <TableCell>
                        <DeleteIcon onClick={props.openDialog} color="secondary" />
                    </TableCell>
                </>
            );
        }
    }

    return (
        <TableRow data-id={props.id}>
            {showToDo(props.status)}
        </TableRow>
    );
}

export default ToDo;