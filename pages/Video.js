import ReactPlayer from "react-player";

function Video() {
  return (
    <>
      <ReactPlayer
        width="100%"
        height="100%"
        playing
        controls
        url="https://www.youtube.com/watch?v=gmDMsUJc8hw&t=3s"
      />
    </>
  );
}

export default Video;
