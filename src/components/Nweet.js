import React, {useState} from 'react';
import { dbService } from "fbase";
import { doc, deleteDoc, updateDoc }from"firebase/firestore";

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const NweetTextRef =doc(dbService, "nweets", `${nweetObj.id}`);
    const onDelClick = async() => {
        const ok = window.confirm('Are you sure you want to delete this nweet?')
        if(ok){
            await deleteDoc(NweetTextRef );
        }
    }
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => {
        event.preventDefault();
        await updateDoc(NweetTextRef, {
            text: newNweet,
        });
        setEditing(false);
    }
    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        setNewNweet(value)
    }
// //update 부분




    return (
        <div>
            {editing ? (
                <>
                <form onSubmit={onSubmit}>
                    <input 
                        type="text"
                        placeholder='Edit your nweet' 
                        value={newNweet} 
                        onChange={onChange}
                        required 
                    />
                    <input type="submit" value="Update Nweet"/>
                </form>
                <button onClick={toggleEditing}>Cancel</button>
                </>
            ) : (
                <>
                    <h4>{nweetObj.text}</h4>
                    {isOwner && (
                        <>
                            <button onClick={onDelClick}>Del</button>
                            <button onClick={toggleEditing}>Edit</button>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Nweet;