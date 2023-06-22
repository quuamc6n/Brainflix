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
          {/* <img
            className="nav__div-avatar"
            src={avatar}
            alt="Avatar Picture"
          ></img> */}
        </div>
      </label>

      <div className="nav__div-upload">
        {/* <img
          className="nav__div-upload-image"
          src={uploadImage}
          alt="Upload Image"
        ></img> */}
        <button
          className="nav__div-upload-button"
        >UPLOAD</button>
      </div>
    </nav>
  );
}