import React, { useState } from 'react';

function Counter(){
    const [num, setNum] = useState(0);
    const style ={
        margin:5
    }
    const onIncrease = () =>{
        setNum(n => n + 1);
        // n = prevNumber (업데이트 함수 for 최적화)
    }
    const onDecrease = () => {
        setNum(prevNumber => prevNumber - 1);
    }
    return (
        <div>
            <h1>{num}</h1>
            <button 
                className='counterBtn'
                onClick={onIncrease}
            >+</button>
            <button 
                className='counterBtn'
                onClick={onDecrease}
                style={style}
            >-</button>
        </div>
    )
}

export default Counter;