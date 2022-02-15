import React, { useReducer } from 'react';
//useReducer라는 Hook 함수를 사용하면 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시키는 것이 가능하다. 심지어 다른 파일에 작성 후 불러올 수도 있다.
//( reducer란 상태를 업데이트하는 함수를 의미)

//useState와 차이점
//useState는 설정하고 싶은 다음 상태를 직접 지정해주는 방식으로 상태를 업데이트해주는 반면에
//useReducer는 'action'이라는 객체(업데이트할 때 참조하는 객체)를 기반으로 상태를 업데이트한다.

function reducer(state, action){
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Unhandle action');
    }
}

function Counter(){
    // const [num, setNum] = useState(0);
    const [number, dispatch] = useReducer(reducer, 0);
    //dispatch: action을 발생시킨다.
    //useReducer(함수, 기본값)
    const style ={
        margin:5
    }
    const onIncrease = () =>{
        //setNum(n => n + 1);
        // n = prevNumber (함수형 업데이트 for 성능 최적화)

        // ㄴ useReducer하기 위해 수정됨
        dispatch({
            type:'INCREMENT',
        })
    }
    const onDecrease = () => {
        //setNum(prevNumber => prevNumber - 1);
        dispatch({
            type:'DECREMENT',
        })
    }
    return (
        <div>
            <h1>{number}</h1>
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