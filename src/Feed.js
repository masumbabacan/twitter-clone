import React, {useState , useEffect} from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';

const Feed = () => {
    const[posts,setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />


            {/* Post */}
            <Post displayName="Masum Babacan"
                username="masumbabacan"
                verified={true}
                text="I am working now" 
                avatar="https://pbs.twimg.com/profile_images/1288787726846824449/mreAeRpH_400x400.jpg"
                image="https://pbs.twimg.com/media/E3gzGnYX0AAltsj?format=jpg"/>
            <Post />
            <Post />
            <Post />
            <Post />

        </div>
    )
}

export default Feed
