import logo from './logo.svg';
import './App.css';
import MediaPlayer from './components/MediaPlayer';
import gistIcon from './icons/gistIcon.ico';


function App() {
  return (
    <div className="App">
      <MediaPlayer
        videoSource="https://firebasestorage.googleapis.com/v0/b/trom-hardama-dev.appspot.com/o/trom-hardama.appspot.com%2Fmusic%2FbackgroundMusic_13_01.mp3?alt=media&token=f79d8204-e83a-4b6e-9758-4016415571b8"
        audioSource="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        watermark={gistIcon}
        audioPauseTime={3}
      />
    </div>
  );
}

export default App;
