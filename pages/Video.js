import ReactPlayer from "react-player";
import style from "../styles/Video.module.css";

function Video() {
  return (
    <>
    <div className={style.wrapper}>
        <ReactPlayer
          className={style.player}
          url='https://www.youtube.com/watch?v=gmDMsUJc8hw&t=3s'
          width='100%'
          height='100%'
        />
      </div>
    </>
  );
}

export default Video;
