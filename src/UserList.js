import React from 'react';

function User({user}){
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    );

}

function UserList({users}){
    return(
        <div>
            <b>배열 렌더링하기</b><br/>
            {
                users.map(
                    user => (<User user={user} key={user.id}/>)
                )
            }
        </div>
    )
}

export default UserList;