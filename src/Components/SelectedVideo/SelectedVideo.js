import "./SelectedVideo.scss";

const SelectedVideo = (props) => {
  return (
    <div className="selectedVideo__div">
        <video className='selectedVideo' src={props.video.video} poster={props.video.image}></video>
    </div>
  )
}

export default SelectedVideo