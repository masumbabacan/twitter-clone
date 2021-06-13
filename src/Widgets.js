import React from 'react'
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";



const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1379494123414114309"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="add_genelmerkez"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://www.linkedin.com/in/masum-babacan-469bb020b/"}
                    options={{ text: "#reactjs is awesome", via: "masumbabacan" }}
                />
            </div>
        </div>
    )
}

export default Widgets;
