import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const AddToDo = props => {
    return (
        <form onSubmit={props.addToDo}>
            <Grid container direction="row" justify="space-between" alignItems="center" >
                <TextField label="Add an ToDo.." variant="outlined" onChange={props.handleChange} type="text" value={props.input}></TextField>
                <Button className="addBtn" variant="contained" color="primary" onClick={props.addToDo} type="submit"type="button">Add</Button>
            </Grid>
        </form>
    );
}

export default AddToDo;