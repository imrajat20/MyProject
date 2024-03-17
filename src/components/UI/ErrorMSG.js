import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorMSG.module.css';
import  ReactDOM  from "react-dom";

const ErrorMSG = props => {

    const Backdrop = props => {

        <div className={classes.backdrop} onClick={props.onTap}/>
    };

    const Modal = props => {
        <Card className={classes.input}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>

        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onTap}>Okay</Button>
        </footer>
    </Card>
    };

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onTap}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Modal />, document.getElementById('modal-root'))}
        </React.Fragment>
    );
};

export default ErrorMSG;