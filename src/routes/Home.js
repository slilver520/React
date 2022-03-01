import React, { useState} from "react";

const Home = () => {
    const [nweet, setNweet] = useState('');
    const onSubmit = (event) => {
        event.preventDefault();
    };
    const onChange = (event) => {
        const {target: {value}} = event;
        //event안에 있는 target안에 있는 value를 달라고하는 것
        setNweet(value)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"    
                    placeholder="What's on your mind?" 
                    maxLength={120}
                    value={nweet}
                    onChange={onChange}
                />
                <input type="submit" value='Nweet'/>
            </form>
        </div>
    )
};
export default Home;