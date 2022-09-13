import React from 'react';


const Card = () => {
    return (
        <>
        <div className='content_box'>
            <div className='box_inner'>
                <h1>BUSINESS</h1>
                <div className='BCard_wrap'>
                    <BCard />
                    <BCard />
                    <BCard />
                </div>
            </div>
        </div>
      </>
    );
}
const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];
function User({ user }) {
    return (
      <div>
        <b>{users.key}</b> 
        <b>{users.username}</b> 
        <span>({users.email})</span>
      </div>
    );
  }

const BCard = () => {
    return (
      <div className='BCard'>
            <div>
            {users.map((user) => (
        <User users={user} key={user.id} />
      ))}
    </div>
      </div>
    );
};

export default Card;