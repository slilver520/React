import React, {useRef, useState} from 'react';
import Hello from './Hello'
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username :'',
    email:'',
  });

  const {username, email} =inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'yh11',
        email:'yh@gmail.com'
    },
    {
        id: 2,
        username:'test',
        email:'test@test.com'
    },
    {
        id: 3,
        username:'ex',
        email:'ex@example.com'
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user ={
      id: nextId.current,
      ...inputs,
    }

    //배열에 항목추가하기 1
    // setUsers([...users, user]);

    //배열에 항목 추가하기 2 
    //concat : 여러개의 배열을 하나의 배열로 합쳐줌
    setUsers(users.concat(user));

    setInputs({
      username :'',
      email:''
    })
    console.log(nextId.current); //4
    nextId.current += 1;
  }
  
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
    //각 user객체들을 확인 => 조건 
  }

  return (
    <Wrapper>
      <>
        <CreateUser 
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove} />
      </>
      <InputSample/>
      <div className="gray-box">
      <Hello
        name="react"
        color="red"
        isSpecial
        //주석처리는 이렇게 1
      />
      {/* 주석처리는 이렇게 2 */}

      <Hello 
        color="blue"
      />
    </div>
    <Counter/>
    </Wrapper>
  );
}

export default App;
