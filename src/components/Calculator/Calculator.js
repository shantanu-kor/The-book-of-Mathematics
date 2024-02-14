import React, { useRef, useState } from "react";

import classes from './Calculator.module.css';

const Calculator = () => {
    const [expression, setExpression] = useState("");
    const expressionRef = useRef();
    const set = new Set(["*", "/", "-", "+", , "(", ")","1", "2", "3", "4", "5", "6", "7", "8", "9", "0"])

    const changeExpressionHandler = () => {
        setExpression(expressionRef.current.value);
    };
    const onClick1Handler = (event) => {
        event.preventDefault();
        setExpression(prevState => prevState + "1");
    };
    const onClick2Handler = (event) => {
        event.preventDefault();
        setExpression(prevState => prevState + "2");
    };
    const onClick3Handler = (event) => {
        event.preventDefault();
        setExpression(prevState => prevState + "3");
    };
    const onClick4Handler = (event) => {
        event.preventDefault();
        setExpression(prevState => prevState + "4");
    };
    const onClick5Handler = (event) => {
        event.preventDefault();
        setExpression(prevState => prevState + "5");
    };
    const onClick6Handler = (event) => {
        event.preventDefault();
        setExpression(prevState => prevState + "6");
    };
    const onClick7Handler = (event) => {
        event.preventDefault();
        setExpression(prevState => prevState + "7");
    };
    const onClick8Handler = (event) => {
        event.preventDefault();
        setExpression(prevState => prevState + "8");
    };
    const onClick9Handler = (event) => {
        event.preventDefault();
        setExpression(prevState => prevState + "9");
    };
    const onClick0Handler = (event) => {
        event.preventDefault();
        setExpression(prevState => prevState + "0");
    };
    const onClickPlusHandler = (event) => {
        event.preventDefault();
        setExpression(prevState => prevState + "+");
    };
    const onClickMinusHandler = (event) => {
        event.preventDefault();
        setExpression(prevState => prevState + "-");
    }
    const onClickDivideHandler = (event) => {
        event.preventDefault();
        setExpression(prevState => prevState + "/");
    }
    const onClickMultiplyHandler = (event) => {
        event.preventDefault();
        setExpression(prevState => prevState + "*")
    };
    const onClickPowHandler = (event) => {
        event.preventDefault();
        setExpression(prevState => prevState + "**");
    };
    const onClickLeftHandler = (event) => {
        event.preventDefault();
        setExpression(prevState => prevState + "(");
    };
    const onClickRightHandler = (event) => {
        event.preventDefault();
        setExpression(prevState => prevState + ")");
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        let ans;
        try {
            for (let i of expression) {
                if (!set.has(i)) {
                    throw Error();
                }
            }
            ans = eval(expression);
            if (ans === undefined) {
                ans = "";
            }
        } catch {
            ans = expression;
            alert("Invalid Expression!")
        }
        setExpression(ans);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" className={classes.inputScreen} value={expression} onChange={changeExpressionHandler} ref={expressionRef}/>
            <table className={classes.numButtonTable}>
                <tr>
                    <td>
                        <button type="button" onClick={onClick1Handler}>1</button>
                    </td>
                    <td>
                        <button type="button" onClick={onClick2Handler}>2</button>
                    </td>
                    <td>
                        <button type="button" onClick={onClick3Handler}>3</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type="button" onClick={onClick4Handler}>4</button>
                    </td>
                    <td>
                        <button type="button" onClick={onClick5Handler}>5</button>
                    </td>
                    <td>
                        <button type="button" onClick={onClick6Handler}>6</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type="button" onClick={onClick7Handler}>7</button>
                    </td>
                    <td>
                        <button type="button" onClick={onClick8Handler}>8</button>
                    </td>
                    <td>
                        <button type="button" onClick={onClick9Handler}>9</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type="button" onClick={onClick0Handler}>0</button>
                    </td>
                    <td>
                        <button type="button" onClick={onClickPlusHandler}>+</button>
                    </td>
                    <td>
                        <button type="button" onClick={onClickMinusHandler}>-</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type="button" onClick={onClickMultiplyHandler}>x</button>
                    </td>
                    <td>
                        <button type="button" onClick={onClickDivideHandler}>÷</button>
                    </td>
                    <td>
                        <button type="button" onClick={onClickPowHandler}>^</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type="button" onClick={onClickLeftHandler}>{'('}</button>
                    </td>
                    <td>
                        <button type="button" onClick={onClickRightHandler}>{')'}</button>
                    </td>
                    <td>
                        <button type="submit">=</button>
                    </td>
                </tr>
            </table>
        </form>
    );
};

export default Calculator;