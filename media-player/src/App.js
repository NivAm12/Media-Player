import './App.css';
import MediaPlayer from './components/MediaPlayer';
import gistImg from './icons/gistImg2.png';


function App() {
  return (
    <div className="App">
      <div className="media">
      <MediaPlayer
        videoSource="https://storage.googleapis.com/gist-25f32.appspot.com/generated-videos/AitmrjWr/master-playlist.m3u8?GoogleAccessId=firebase-adminsdk-tf1vj%40gist-25f32.iam.gserviceaccount.com&Expires=16725225600&Signature=jJulnVeKAmEw%2FtJQ49p0XzIGpnntG78sSJ4%2BsSbn6wXPkzYxRaVBKQeeYuRqIkcMdUKNAOJAkZ5A8Z2OK89ggUOyP2u0JH%2BHmMVaHyMfaghYIcaRi4m8HwaQzoReop6vrTak8XVfVCggbDtSsx%2Boxj5fryRtoN0qBo6d4drxZyaAdHKycEP467PTmgYAo8ZuJ33i24kuQlVI3uUVlREHHqlQbsE%2B4dO7D2%2Bwo2ozTewBr9F3wc6djQScmUm8YD8Iy9k5mJs9F5EZT9zVYwYtLNLM3oJdcnid92tWVDCXlwXVKzVIO20ggXTLYo2gy71qvi1aQzo0eEnyrCJV7jtFww%3D%3D"
        audioSource="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        watermark={gistImg}
        audioPauseTime={3}
      />
      </div>
    </div>
  );
}

export default App;
