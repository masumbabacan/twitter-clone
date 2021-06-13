
import React from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post ({
        displayName,
        username,
        verified,
        text,
        image,
        avatar
}) {
    return <div className="post">
            <div className="post__avatar">
                <Avatar src="https://pbs.twimg.com/profile_images/1288787726846824449/mreAeRpH_400x400.jpg"/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Masum babacan {" "}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" /> @masumbabacan
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>post header açıklaması</p>
                    </div>
                </div>
                <img src="https://pbs.twimg.com/media/E3gzGnYX0AAltsj?format=jpg" alt="" />
                <div className="post__footer">
                    <ChatBubleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </div>
}
   
export default Post
