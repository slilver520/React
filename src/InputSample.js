import React, {useState, useRef} from 'react';

function InputSample(){
    const [inputs, setInputs] = useState({
        name : '',
        nickname : '',
    });

    const nameInput = useRef();
    const {name, nickname} = inputs;
    // console.log ("inputs : ",inputs)
    
    const onChange = (e) => {
        const { name, value } = e.target;

        //객체 업데이트하는 방법
        setInputs({
            ...inputs,
            // ... : 기존의 객체를 복사
            [name]:value,
        });
    }; 
    
    const onReset = () => {
        setInputs({
            name:'',
            nickname:''
        });
        nameInput.current.focus();
        //current = 해당 DOM

    }; 
    return(
        <div>
            <input 
                name="name" 
                placeholder='이름' 
                onChange={onChange} 
                value={name}
                ref={nameInput}
            />
            <input 
                name="nickname" 
                placeholder='닉네임' 
                onChange={onChange} 
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({nickname})
            </div>
        </div>
    );
}

export default InputSample;