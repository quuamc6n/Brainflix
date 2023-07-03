import navLogo from "../../assets/Images/BrainFlix-logo.svg"
import "./Nav.scss"
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__div">
        <Link to="/">
          <img
            className="nav__div-logo"
            src={navLogo}
            alt="Brainflix Logo"
          ></img>
        </Link>
      </div>

      <label className="nav__label">
        <input
          className="nav__label-search-input"
          name="searchBar"
          type="text"
          placeholder="Search"
          id="searchImage"
        ></input>
        <div className="nav__label-div"></div>
      </label>

      <div className="nav__div-upload">
          <Link to="UploadPage" className="nav__div-upload-link">
            <div className="nav__div-upload-button">UPLOAD</div>
            </Link>
        <div className="nav__div-upload-tablet"></div>
      </div>
    </nav>
  );
}