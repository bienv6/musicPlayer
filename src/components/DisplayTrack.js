import { BsMusicNoteBeamed } from 'react-icons/bs';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {useEffect} from "react";
import axios from "axios";

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const handleLikesClick = () =>
    {
        {currentTrack.likesCount ++}
        console.log(`this is the current likes count ${currentTrack.likesCount ++}`)
    };



  return (
    <div>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="text">
        <p className="title">{currentTrack.title}
            <span className="likes1"><button onClick={handleLikesClick}><ThumbUpIcon/></button> {currentTrack.likesCount}</span>

        </p>
        <p>{currentTrack.author}</p>
      </div>
      <div className="audio-info">
        <div className="audio-image">
          {currentTrack.thumbnail ? (
            <img src={currentTrack.thumbnail} alt="audio avatar" />
          ) : (
            <div className="icon-wrapper">
              <span className="audio-icon">
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
export default DisplayTrack;
