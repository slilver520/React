import React from 'react';

function CreateUser({ username, email, onChange, onCreate}){
    return(
        <div>
            <b>배열에 항목 추가하기</b>
            <br/>
            <input 
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input 
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}
export default React.memo(CreateUser,
    (prevProps, nextProsp) => nextProsp.users === prevProps.users
);
//React.memo : props가 바꼈을때만 리렌더링 해줌 (for 최적화)

//React.memo 함수를 사용할 때 두 번째 파라미터에 props are equal 함수를 넣어줄 수 있다.
//prevProps와 nextProps가 같은지 확인을 해서 같다면 리 렌더링을 막고 다르면 리 렌더링을 하는 식의 함수이다.
//이 함수는 잘못 사용할 경우 치명적 오류가 될 수 있기 때문에 주의해서  사용하도록 하자.