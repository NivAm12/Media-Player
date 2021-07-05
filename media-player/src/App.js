import logo from './logo.svg';
import './App.css';
import MediaPlayer from './components/MediaPlayer';
import gistIcon from './icons/gistIcon.ico';


function App() {
  return (
    <div className="App">
      <MediaPlayer
        videoSource="https://example.com/index.m3u8"
        audioSource="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        watermark={gistIcon}
        audioPauseTime={3}
      />
    </div>
  );
}

export default App;
