import React, {useRef, useReducer, useMemo, useCallback} from 'react';
import Hello from './Hello'
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는 중..')
  return users.filter(user => user.active).length;
}

const initialState = {
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

function reducer(state, action) {
  switch (action.type) {
    
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
        //concat : 여러개의 배열을 하나의 배열로 합쳐줌
      };
    case 'TOGGLE_USER' :
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id 
            ? { ...user, active: !user.active } 
            : user
        )
        //map: 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환함.
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
        // filter 함수를 사용해서 user.id와 action으로 받아온 action.id가 일치하지 않으면 유지하고, 일치한다면 배열에서 사라지게 만들어준다. 
      };      
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //const [현재상태, action을 발생시키는 함수]

  const [form, onChange, reset] = useInputs({
    username:'',
    email:'',
  })
  const { username, email} = form;
  const nextId = useRef(4);
  const { users } = state;
  //비구조화 할당을 통해 추출
  
  //const { username, email } = state.inputs;
  //컴포넌트에게 props로 전달한다.


  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <Wrapper>
      <>
        <CreateUser 
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList 
          users={users}
          onToggle={onToggle}
          onRemove={onRemove}
        />
        <div>활성 사용자 수 : {count}</div>
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
