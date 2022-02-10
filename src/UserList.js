import React from 'react';

function User({user}){
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    );

}

function UserList(){
    const users = [
        {
            id: 1,
            username: 'yh',
            email:'yh@gmail.com'
        },
        {
            id: 2,
            username:'test',
            email:'test@test.com'
        },
        {
            id: 3,
            username:'ex',
            email:'ex@example.com'
        }
    ]

    return(
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id}/>)
                )
            }
        </div>
    )
}

export default UserList;