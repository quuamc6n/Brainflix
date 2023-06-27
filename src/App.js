import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/Main/MainPage';
import UploadPage from './pages/Upload/UploadPage';
import Nav from "./Components/Nav/Nav";

function App() {
return (
  <BrowserRouter>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="UploadPage" element={<UploadPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);
}

export default App;
