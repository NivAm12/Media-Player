import logo from './logo.svg';
import './App.css';
import MediaPlayer from './components/MediaPlayer';
import gistIcon from './icons/gistIcon.ico';


function App() {
  return (
    <div className="App">
      <MediaPlayer
        videoSource="//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8"
        audioSource="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        thumbnail={gistIcon}
      />
    </div>
  );
}

export default App;
