import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/Main/MainPage';
import UploadPage from './pages/Upload/UploadPage';
import Nav from "./Components/Nav/Nav";
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
// import VideoList from './Components/VideoList/VideoList';
// import SelectedVideo from './Components/SelectedVideo/SelectedVideo';

function App() {
return (
  <div className="App">
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/videos/:videoId" element={<VideoPlayer />}></Route>
        <Route path="UploadPage" element={<UploadPage />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);
}

export default App;
