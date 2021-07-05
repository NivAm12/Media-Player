import React, {useEffect, useRef} from 'react';
import VideoJs from 'video.js';
import 'video.js/dist/video-js.css';
import '../style/MediaPlayer.css'


const MediaPlayer = (props) => {

    // DATA
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

    // METHODS
    const onPlayerPlay = (player) => {
        playAudio.current = true;

        // check if delay is necessary:
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
        // check if the video is close to an ending, and pause the audio if so
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


    // RENDER
    return (
    <div style={{width: window.innerWidth, height: window.innerHeight}}>
    <div className='videoApp'>
        <div data-vjs-player>
        <video 
        className="video-js"
        ref={playerRef}
        />
        </div>
    </div>
    <img src={props.watermark} className='watermark'/>
    </div>
    );
}

export default MediaPlayer;