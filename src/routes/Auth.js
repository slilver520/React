import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  } from 'firebase/auth';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');

  const onChange = (event) => {
    const {target: {name, value}} = event;
    //event로부터 target을 받아온 후 name, value 받아오기

    if(name === 'Email'){
        setEmail(value)
    }else if(name === 'password'){
        setpassword(value)
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      // 에러가 발생할 것 같은 코드
      let data;
      const auth = getAuth()
      if(newAccount) {
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log (data);
    } catch(error) {
      // 에러가 발생했을때 동작할 코드 
      setError(error.message)
    }
  }
  const toggleAccount = () => setNewAccount((prev) => !prev)



  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
            name="Email"
            type='email' 
            placeholder='Email' 
            required 
            value={email} 
            onChange={onChange}
        />
        <input
            name='password'
            type='password'
            placeholder='Password'
            required
            value={password}
            onChange={onChange}
        />
        <input type='submit' value={newAccount ? 'Create Account' : 'Log In'} />
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? 'Sign in' : 'Create Account'}</span>
      <div>
        <button>Email</button>
        <button>Google</button>
        <button>Github</button>
      </div>
    </div>
  );
};

//Auth = authentication 인증
export default Auth;
//자동으로 import가 되도록 하고싶을때
