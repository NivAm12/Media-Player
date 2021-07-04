
import React, {useState, useEffect, useRef} from 'react';
import VideoJs from 'video.js';
//npimport useStyles from '../style/MediaPlayer';
import 'video.js/dist/video-js.css';

const MediaPlayer = (props) => {

    // DATA:
    const [audio] = useState(new Audio(props.audioSource))
    const playVideoAndAudio = useRef(false);
    const playerRef = useRef(null);

    const videoOptions = {
        autoplay: false,
        muted: false,
        aspectRatio: '16:9',
        responsive: true,
        controls: true,
        fluid: true
    };

    useEffect(()=> {
        if(playerRef){
            const player = VideoJs(playerRef.current, videoOptions, () => {
                player.src(props.videoSource);
                player.addClass('vjs-matrix');
                // player.on("play", () => {playVideoAndAudio.current = true});
                // player.on("pause", () => {playVideoAndAudio.current = false});
                player.on("play", () => audio.play());
                player.on("pause", () => audio.pause());
            })
        }
    });

    return (
    <div>   
          <video 
          className="video-js vjs-default-skin"
          ref={playerRef}/>
    </div>
    );
}

export default MediaPlayer;

