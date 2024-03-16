import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorMSG.module.css';

const ErrorMSG = props => {

    return( <div>
    <div className={classes.backdrop} onClick={props.onTap}>
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
    </div>
    </div>
    )
};

export default ErrorMSG;