import { Button,Avatar } from '@material-ui/core'
import React,{useState} from 'react'
import "./TweetBox.css"
import db from './firebase'

function TweetBox (){

    const[tweetMessage,setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = e =>{
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Masum Babacan',
            username: 'masumbabacan',
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar:"https://pbs.twimg.com/profile_images/1288787726846824449/mreAeRpH_400x400.jpg"


        })

        setTweetMessage("");
        setTweetImage("");

    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://pbs.twimg.com/profile_images/1288787726846824449/mreAeRpH_400x400.jpg"></Avatar>
                <input onChange={(e)=>setTweetImage(e.target.value)} value={tweetImage} onChange={(e)=> setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text"></input>
                </div>
                <input className="tweetBox__imageInput" placeholder="Enter image URL" type="text"></input>

                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
