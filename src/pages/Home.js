import React from "react";

import classes from './Home.module.css';
import Calculator from "../components/Calculator/Calculator";

const HomePage = () => {
    return (
        <React.Fragment>
            <div className={classes.calculatorDiv}>
                <h3 className={`text-3xl ${classes.h3}`}>Calculator</h3>
                <Calculator />
                <p>Made with ❤️</p>
            </div>
        </React.Fragment>
    );
};

export default HomePage;