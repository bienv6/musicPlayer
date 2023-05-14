import { BsMusicNoteBeamed } from 'react-icons/bs';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {useEffect, useState} from "react";

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
  const [liked,setLiked] = useState(false);

  const handleLikesClick = (e, liked) =>

    {
        // MAKE API CALL TO UPDATE SONG SERVICE LIKES
        if(liked !== true){
            currentTrack.likesCount++;
            console.log(`this is the current likes count ${currentTrack.likesCount}`)
            console.log(`like button is now disabled: ${e.target}`)
            setLiked(true);

        }

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
            <span className="likes1"><button onClick={handleLikesClick} disabled={liked} name="likedBtn"><ThumbUpIcon/></button> {currentTrack.likesCount}</span>
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
