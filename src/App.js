import React, {useState} from 'react';
import './App.css';
import UserInput from './components/Users/UserInput';
import UserList from './components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const userInputHandler = (uName, uAge, uCollege) => {

    setUserList((prevList)=>{
      return [...prevList, {name:uName , age:uAge, college:uCollege, id:Math.random().toString()}]
    });

  };

  return (
    <React.Fragment className="App">
      <UserInput onUserInput={userInputHandler}></UserInput>
      <UserList users={userList}></UserList>
    </React.Fragment>
  );
}

export default App;
