import React from 'react';

function User({user, onRemove}){
    const {username, email, id} = user;
    return (
        <div>
            <b>{username}</b>
            <span>({email})</span>
            <button 
                onClick={() => onRemove(id)}
                // 함수 호출이 아니라 함수를 넣어주어야한다
                //호출하면 랜더링시 remove됨
            >x</button>
        </div>
    );

}

function UserList({users, onRemove}){
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
                        />)
                )
            }
        </div>
    )
}

export default UserList;