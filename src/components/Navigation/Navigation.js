import React from "react";
import classes from './Navigation.module.css';
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
    const navClasses = `text-5xl ${classes.nav}`
    return (
        <React.Fragment>
            <nav className={navClasses}>
                <NavLink className={classes.link} to="/">Home</NavLink>
                <NavLink className={classes.link} to="/findRoots">Find Roots</NavLink>
            </nav>
            {props.children}
        </React.Fragment>
    );
};

export default Navigation;
