import React from "react";
import ReactPlayer from 'react-player'

const YouTubeVideo = ({ embedId, wrapperId, frameId }) => (
    <div id={wrapperId}>
        <ReactPlayer
            id={frameId}
            url={`https://www.youtube.com/embed/${embedId}`}
            width="100%"
            height="100%"
            playbackRate={0.5}
            muted={true}
            playing={true}
            loop={true}
            style={{ pointerEvents: 'none'}}
            config={{ youtube: { playerVars: { disablekb: 1 } } }}
        />
    </div>
);

export default YouTubeVideo;