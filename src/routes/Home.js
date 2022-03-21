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
    const [attachment, setAttachment] = useState();

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
    };
    const onFileChange = (event) => {
        const {
            target: { files },
        } = event;
        const theFile = files[0];
        const reader = new FileReader();

        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: {result},
            } = finishedEvent;
            setAttachment(result);
        };
        //onloadend에 finishedEvent result를 setAttachment로 설정해줌

        reader.readAsDataURL(theFile);
    }
    const onClearAttachment = () => setAttachment(null);
    
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
                <input type="file" accept="image/*" onChange={onFileChange}/>
                <input type="submit" value='Nweet'/>
                {attachment && (
                    <div>
                        <img src={attachment} alt='' width="50px" height="50px"/>
                        <button onClick={onClearAttachment}>Clear</button>
                    </div>
                )}
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