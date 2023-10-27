import "./UploadPage.scss";
import UploadImage from "../../assets/Images/Upload-video-preview.jpg"
import axios from "axios";

function UploadPage() {

const onSubmit = async (e) => {
  console.log(e.target.title.value);
  e.preventDefault();
  const formData = {
    title: e.target.title.value,
    description: e.target.description.value,
  };
  try {
    await axios.post("https://brainflexbackend.onrender.com/videos", formData);
    alert("Form successfully submitted");
    window.location.href = "/";
  } catch (error) {
    console.error(error);
  }
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
      <form className="main__form" onSubmit={onSubmit}>
        <label className="main__form-label">
          <input
            name="title"
            className="main__form-title"
            placeholder="Add a title to your video"
          ></input>
        </label>
        <p className="main__title">ADD A VIDEO DESCRIPTION</p>
        <label className="main__form-label">
          <input
            name="description"
            className="main__form-title main__form-title-textArea"
            placeholder="Add a description to your video"
          ></input>
        </label>
        <div className="main__div-buttons">
          <button className="button__publish">PUBLISH</button>
          <div className="button__cancel">CANCEL</div>
        </div>
        <div className="main__div-buttons-tablet">
          <div className="button__publish-tablet">CANCEL</div>
          <button className="button__cancel-tablet">PUBLISH</button>
        </div>
      </form>
    </main>
  );
}

export default UploadPage