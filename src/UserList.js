import React from 'react';

function User({user}){
    <div>
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    </div>

console.log({user})
}

function UserList(){
    // const users = [
    //     {
    //         id: 1,
    //         username: 'yh',
    //         email:'yh@gmail.com'
    //     },
    //     {
    //         id: 2,
    //         username:'test',
    //         email:'test@test.com'
    //     },
    //     {
    //         id: 3,
    //         username:'ex',
    //         email:'ex@example.com'
    //     }
    // ]

    return(
        <User/>
    )
}

export default UserList;