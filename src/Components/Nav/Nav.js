import navLogo from "../../assets/Images/BrainFlix-logo.svg"
import avatar from "../../assets/Images/Mohan-muruge.jpg"
import uploadImage from "../../assets/Images/upload.svg"
import "./Nav.scss" 

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__div">
        <img className="nav__div-logo" src={navLogo} alt="Brainflix Logo"></img>
      </div>

      <label className="nav__label">
        <input
          className="nav__label-search-input"
          name="searchBar"
          type="text"
          placeholder="Search"
          id="searchImage"
        ></input>
        <div className="nav__label-div">

        </div>
      </label>

      <div className="nav__div-upload">
        <button
          className="nav__div-upload-button"
        >UPLOAD</button>
      </div>
    </nav>
  );
}