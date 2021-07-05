
import React, {useState, useEffect, useRef} from 'react';
import VideoJs from 'video.js';
import "videojs-watermark";
import 'video.js/dist/video-js.css';

const MediaPlayer = (props) => {

    // DATA:
    const audio = useRef(new Audio(props.audioSource))
    const playAudio = useRef(false);
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
        playAudio.current = true;

        if(player.currentTime() >= props.audioPauseTime) {
            audio.current.play();
        }
        else{
            const timeToDelay = ((props.audioPauseTime) - player.currentTime()) * 1000;
            setTimeout(() => playAudio.current ? audio.current.play(): null, timeToDelay);
        }
    }

    const onPlayerPause = () => {
        playAudio.current = false;
        audio.current.pause();
    }

    const onPlayerRuns = (player) => {
        if(player.remainingTime() <= props.audioPauseTime){
            onPlayerPause();
        }
    }

    const setPlayerInitialSettings = () => {
        const player = VideoJs(playerRef.current, videoOptions, () => {
            // set the props of the player:
            player.src(props.videoSource);
            audio.current.currentTime = player.currentTime();
            player.on("play", () => onPlayerPlay(player));
            player.on("pause", onPlayerPause);
            player.setInterval(() => onPlayerRuns(player), 200);
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

