import "./UploadPage.scss";
import UploadImage from "../../assets/Images/Upload-video-preview.jpg"
import { Link } from "react-router-dom";

function UploadPage() {

const onclickFunc = () => {
  alert("Form successfully received");
  window.location.href = "/";
};

  return (
    <main className="main">
      <h2 className="main__h2">Upload Video</h2>
      <p className="main__title">VIDEO THUMBNAIL</p>
      <img
        className="main__image"
        src={UploadImage}
        alt="Upload Videa Preview"
      ></img>
      <p className="main__title">TITLE YOUR VIDEO</p>
      <form className="main__form">
        <label className="main__form-label">
          <input
            className="main__form-title"
            placeholder="Add a title to your video"
          ></input>
        </label>
      </form>
      <p className="main__title">ADD A VIDEO DESCRIPTION</p>
      <form className="main__form">
        <label className="main__form-label">
          <input
            className="main__form-title main__form-title-textArea"
            placeholder="Add a description to your video"
          ></input>
        </label>
      </form>
      <div onClick={() => onclickFunc()} className="main__div-buttons">
        <div className="button__publish">PUBLISH</div>
        <div className="button__cancel">CANCEL</div>
      </div>
      <div className="main__div-buttons-tablet">
        <div className="button__publish-tablet">CANCEL</div>
        <div onClick={() => onclickFunc()} className="button__cancel-tablet">
          PUBLISH
        </div>
      </div>
    </main>
  );
}

export default UploadPage