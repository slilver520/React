import React, {useRef} from 'react';
import Hello from './Hello'
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const users = [
    {
        id: 1,
        username: 'yh',
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
  ]

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current); //4
    nextId.current += 1;
  }

  return (
    <Wrapper>
      <UserList users={users}/>
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
