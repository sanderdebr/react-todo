import React from 'react';

const AddToDo = props => {
    return (
        <form onSubmit={props.addToDo}>
            <div className="input-group mb-3">
                <input onChange={props.handleChange} type="text" value={props.input} placeholder="Add a new ToDo" className="form-control" placeholder="Add a ToDo.." />
                <div className="input-group-append">
                    <button onClick={props.addToDo} type="submit" className="btn btn-primary" type="button">Add</button>
                </div>
            </div>
        </form>
    );
}

export default AddToDo;