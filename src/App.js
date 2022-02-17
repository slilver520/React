import React, {useRef, useReducer, useMemo, useCallback} from 'react';
import Hello from './Hello'
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는 중..')
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username :'',
    email:'',
  },
  users: [
    {
        id: 1,
        username: 'yh11',
        email:'yh@gmail.com',
        active: true,
    },
    {
        id: 2,
        username:'test',
        email:'test@test.com',
        active: false,
    },
    {
        id: 3,
        username:'ex',
        email:'ex@example.com',
        active: false,
    }
  ]
}

function reducer(state, action){
  return state;

}
function App() {
  return (
    <Wrapper>
      <>
        <CreateUser 
          
        />
        <UserList users={[]} />
        <div>활성 사용자 수 : 0</div>
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
