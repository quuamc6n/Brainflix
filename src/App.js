import logo from './logo.svg';
import './App.css';

function App() {
const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

const clickHandler = (video) => {
  setSelectedVideo(video)
};

const getDate = (timestamp) => {
  let date = new Date(timestamp);
  return date.toLocaleDateString();
};

return (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </BrowserRouter>
);
}

export default App;
