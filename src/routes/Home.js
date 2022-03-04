import React, { useEffect, useState} from "react";
import {dbService} from 'fbase';
import {addDoc, collection, getDocs, query} from 'firebase/firestore';


const Home = () => {
    const [nweet, setNweet] = useState('');
    const [nweets, setNweets] = useState([]);
    const getNweets = async () => {
        const q = query(collection(dbService, "nweets"));
        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((doc) => {
            const nweetObj = {
                ...doc.data(),
                id: doc.id,
                }
            setNweets(prev => [nweetObj, ...prev])
            //새 트윗, 이전 트윗
        });
    };
    useEffect(() => {
        getNweets();
    },[]);





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
console.log('nweets: ',nweets)
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
            <div>
                {nweets.map((nweet) => (
                <div key={nweet.id}>
                    <h4>{nweet.nweet}</h4>
                </div>
                ))}
            </div>
        </div>
    )
};
export default Home;