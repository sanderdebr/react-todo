import React from 'react';
import { render } from '@testing-library/react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="#">React ToDo List</a>
        </nav>
    );
}

export default Navbar;