import React from 'react';

function User({user, onRemove, onToggle}){
    const {username, email, id, active} = user;
    return (
        <div>
            <b
                style={{
                    color: active ? 'olive' : 'black',
                    cursor: 'pointer',
                }}
                onClick={() => onToggle(id)}
                //새로운 함수를 만들어서 onToggle에다가 (id)를 넣어 호출해줌
            >{username}</b>
            <span>({email})</span>
            <button 
                onClick={() => onRemove(id)}
                // 함수 호출이 아니라 함수를 넣어주어야한다
                //호출하면 랜더링시 remove됨
            >x</button>
        </div>
    );

}

function UserList({users, onRemove, onToggle}){
    return(
        <div>
            <b>배열 렌더링하기</b><br/>
            {
                users.map(
                    user => (
                        <User 
                            user={user} 
                            key={user.id}
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />)
                )
            }
        </div>
    )
}

export default UserList;