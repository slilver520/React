import React from 'react';

const Nweet = ({ nweetObj, isOwner }) => (
    <div>
        <h4>{nweetObj.text}</h4>
        {isOwner && (
            <><button>Del</button>
            <button>Edit</button></>
        )}
    </div>
);

export default Nweet;