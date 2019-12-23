import React from 'react';

const ToDo = props => {
    console.log(props.date);
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.date}</td>
            <td>
                <svg className="bi bi-pencil" width="2em" height="2em" viewBox="0 0 20 20" fill="gold" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M13.293 3.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM14 4l2 2-9 9-3 1 1-3 9-9z" ></path>
                    <path fillRule="evenodd" d="M14.146 8.354l-2.5-2.5.708-.708 2.5 2.5-.708.708zM5 12v.5a.5.5 0 00.5.5H6v.5a.5.5 0 00.5.5H7v.5a.5.5 0 00.5.5H8v-1.5a.5.5 0 00-.5-.5H7v-.5a.5.5 0 00-.5-.5H5z" ></path>
                </svg>           
            </td>
            <td>
                <svg className="bi bi-x-circle" width="2em" height="2em" viewBox="0 0 20 20" fill="darkred" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 17a7 7 0 100-14 7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z"></path>
                    <path fillRule="evenodd" d="M12.646 13.354l-6-6 .708-.708 6 6-.708.708z" ></path>
                    <path fillRule="evenodd" d="M7.354 13.354l6-6-.708-.708-6 6 .708.708z" ></path>
                </svg>
            </td>
        </tr>
    );
}

export default ToDo;