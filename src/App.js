import React, {useRef, useState, useMemo, useCallback} from 'react';
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
function App() {
  const [inputs, setInputs] = useState({
    username :'',
    email:'',
  });

  const {username, email} =inputs;
  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }, [inputs]);
  //useCallback :이전에 만들었던 함수를 새로 만들지 않고 재사용하는 방법
  //참고로 useCallback도 useMemo와 마찬가지로 두 번째 파라미터에 deps 필요
  //deps배열에 inputs넣어주면(참고해야할것들) inputs가 바뀔때마다 onChange가 새로 만들어지고 그렇지않다면 기존의 함수 재사용함
  
  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user ={
      id: nextId.current,
      username,
      email,
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
    // console.log(nextId.current); //4
    nextId.current += 1;
  }, [username, email, users]);

  //배열에 항목 제거하기
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
    //각 user객체들을 확인(=user을 파라미터로 가져옴) => 조건 
  }

  //불변성 유지하며 배열에 항목 수정하기
  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
        ? {...user, active: !user.active}
        : user
    ))

  }
  //useMemo : 특정 값이 바뀌었을때만 특정 함수를 실행해서 연산을 하도록 처리하고
  //원하는 값이 바뀌지 않았다면 리렌더링할때 이전에 만들었던 값을 재사용할 수 있게 해줌
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <Wrapper>
      <>
        <CreateUser 
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
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
