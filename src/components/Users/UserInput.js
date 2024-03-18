import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './UserInput.module.css';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';
import ErrorMSG from '../UI/ErrorMSG';


const UserInput = (props) => {

    const [enteredUsername, setUsername] = useState('');
    const [enteredAge, setAge] = useState('');
    const [enteredCollege, setCollge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = event => {
       event.preventDefault();
       if(enteredUsername.trim().length===0 || enteredAge.trim().length === 0){
        setError({
            title:'Invalid input !',
            message:'Please enter a valid name and age (non-empty values)'
        });
        return ;
       }
       if(+enteredAge <1){
        setError({
            title:'Invalid age',
            message:'Please enter a valid age (>0)'
        });
        return ;
       }
        props.onUserInput(enteredUsername,enteredAge,enteredCollege);
        setUsername('');
        setAge('');
        setCollge('');
    }
    const usernameHandler = event => {
        setUsername(event.target.value);
    }
    const ageHandler = event => {
        setAge(event.target.value);
    }
    const collegeHandler = event => {
        setCollge(event.target.value);

    };
    const errorHandler = () => {

        setError(null);

    };

    return (
        <Wrapper>
            {error && <ErrorMSG title={error.title} message={error.message} onTap={errorHandler}></ErrorMSG>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler} className='layout' >
                    <label htmlFor='username'>UserName</label>
                    <input id='username' type="text" value={enteredUsername} onChange={usernameHandler}></input>
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type="number" value={enteredAge} onChange={ageHandler}></input>
                    <label htmlFor='college'>College Name</label>
                    <input id='college' type='text' value={enteredCollege} onChange={collegeHandler}></input>
                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );

}

export default UserInput ;