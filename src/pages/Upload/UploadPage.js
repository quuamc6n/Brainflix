import "./UploadPage.scss";


function UploadPage() {
  return (
    <main className="main">
      <h2 className="main__h2">Upload Video</h2>
      <p className="main__title">VIDEO THUMBNAIL</p>
      <img src="../../assets/Images/Upload-video-preview" alt="Upload Videa Preview"></img>
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
      <button className="button__publish">PUBLISH</button>
      <button className="button__cancel">CANCEL</button>
    </main>
  );
}

export default UploadPage