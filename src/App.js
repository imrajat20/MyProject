import React, {useState} from 'react';
import './App.css';
import UserInput from './components/Users/UserInput';
import UserList from './components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const userInputHandler = (uName, uAge) => {

    setUserList((prevList)=>{
      return [...prevList, {name:uName , age:uAge, id:Math.random().toString()}]
    });

  };

  return (
    <div className="App">
      <UserInput onUserInput={userInputHandler}></UserInput>
      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
