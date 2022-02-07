import { useRef, useState } from "react"
import { meal } from "../../constants"
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"
import './Intro.css';

const Intro = () => {
  const videoRef = useRef();
  const [playVideo, setPlayVideo] = useState(false)
  const [isShown, setIsShown] = useState(false);

  const handleVideo = () => {
    setPlayVideo((preVideo) => !preVideo)
    playVideo ? videoRef.current.pause() : videoRef.current.play()
  }

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={videoRef}
        type="video/mp4"
        loop
        control={false}
        muted
      />
      <div className={`${playVideo ? "remove_overlay flex__center" : "app__video_overlay flex__center"}`}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isShown && (
          <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
            {playVideo ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill color="#fff" fontSize={30} />}
          </div>
        )}
      </div>
    </div >
  )
}
export default Intro;
