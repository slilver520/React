import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const onChange = (event) => {
    const {target: {name, value}} = event;
    //event로부터 target을 받아온 후 name, value 받아오기

    if(name === 'Email'){
        setEmail(value)
    }else if(name === 'password'){
        setpassword(value)
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
            name="Email"
            type='text' 
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
        <input type='submit' value='Log In' />
      </form>
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
