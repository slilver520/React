import React, { useState} from "react";
import {dbService} from 'fbase';
import {addDoc, collection} from 'firebase/firestore';


const Home = () => {
    const [nweet, setNweet] = useState('');
    const onSubmit = async(event) => {
        event.preventDefault();
        try{
            const docRef = await addDoc(collection(dbService, 'nweets'),{
                nweet,
                createAt:Date.now(),
            });
            console.log('Document written wid ID:', docRef.id)
        }catch(error){
            console.error('Error adding document:', error);
        }
        setNweet('');
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
                    value={nweet}
                    onChange={onChange}
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120}
                />
                <input type="submit" value='Nweet'/>
            </form>
        </div>
    )
};
export default Home;