import React, {createContext, useContext, useState} from 'react';
 
const MyContext = createContext('defaultVlaue');
 
function Child() {
    const text = useContext(MyContext)
    // useContext는 Context에 있는 값을 읽어와서 사용할 수 있게 해주는 리액트에 내장된 Hook
    
    return <div>안녕하세요? {text}</div>
}
 
function Parent() {
    return <Child />
}
 
function GrandParent() {
    return <Parent />
} 
 
function ContextSample() {
    const [value, setValue] = useState(true);
    return (
    <MyContext.Provider value ={value ? 'GOOD' : 'BAD'}>
        <GrandParent />
        <button onClick={() => setValue(!value)}>CLICK ME</button>
    </MyContext.Provider>
    //Provider : MyContext 값을 지정
    )
}
 
export default ContextSample;