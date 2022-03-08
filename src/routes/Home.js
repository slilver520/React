import React, { useEffect, useState} from "react";
import {dbService} from 'fbase';
import Nweet from "components/Nweet";
import {
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
    } from "firebase/firestore";


//onsnapshot : 데이터베이스의 변화를 실시간으로 알려줌

const Home = ({userObj, isOwner}) => {
    const [nweet, setNweet] = useState('');
    const [nweets, setNweets] = useState([]);
    // const getNweets = async () => {
    //     const q = query(collection(dbService, "nweets"));
    //     const querySnapshot = await getDocs(q);
        
    //     querySnapshot.forEach((doc) => {
    //         const nweetObj = {
    //             ...doc.data(),
    //             id: doc.id,
    //             }
    //         setNweets(prev => [nweetObj, ...prev])
    //         //새 트윗, 이전 트윗
    //     });
    // };

    useEffect(() => {
        const q = query(
            collection(dbService, "nweets"),
        );
        onSnapshot(q, (snapshot) => {
            const nweetArr = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setNweets(nweetArr);
            console.log(snapshot.docs)
        });
    }, []);
        


    const onSubmit = async(event) => {
        event.preventDefault();
        try{
            const docRef = await addDoc(collection(dbService, 'nweets'),{
                text: nweet,
                createAt: Date.now(),
                creatorId: userObj.uid,
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
            <div>
                {nweets.map((nweet) => (
                    <Nweet 
                        key={nweet.id} 
                        nweetObj={nweet}
                        isOwner={nweet.creatorId === userObj.uid}
                    />
                ))}
            </div>
        </div>
    )
};
export default Home;