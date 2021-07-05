
import React, {useState, useEffect, useRef} from 'react';
import VideoJs from 'video.js';
import "videojs-watermark";
import 'video.js/dist/video-js.css';

const MediaPlayer = (props) => {

    // DATA:
    const audio = useRef(new Audio(props.audioSource))
    const playVideoAndAudio = useRef(false);
    const playerRef = useRef(null);

    const videoOptions = {
        autoplay: false,
        muted: false,
        aspectRatio: '16:9',
        responsive: true,
        controls: true,
        //fluid: true
    };

    const onPlayerPlay = (player) => {
        if(player.currentTime() >= props.audioPauseTime) {
            audio.current.play();
        }
        else{
            setTimeout(() => audio.current.play(), props.audioPauseTime * 1000);
        }
    }

    const setPlayerInitialSettings = () => {
        const player = VideoJs(playerRef.current, videoOptions, () => {
            player.src(props.videoSource);
            audio.current.currentTime = player.currentTime();
            player.on("play", () => onPlayerPlay(player));
            player.on("pause", () => audio.current.pause());
        });
    }

    useEffect(()=> {
        if(playerRef){
            setPlayerInitialSettings();
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

