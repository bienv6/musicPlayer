import {createContext, useRef, useState} from 'react';
import { tracks } from '../data/tracks';

// import components
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import TopBar from './TopBar';
import Profile from "./Profile";
import Comments from "./Comments";

export const UserContext = createContext();


const AudioPlayer = defaultValue => {

  const [loggedIn, setLoggedIn] = useState({"signedIn": false, "profile":{}});
  // states
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(
    tracks[trackIndex]
  );
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
      <UserContext.Provider value={[loggedIn,setLoggedIn]}>
    <>
      <TopBar />
      <div className="audio-player">
        <Profile/>
        <div className="inner">
          <DisplayTrack
            {...{
              currentTrack,
              audioRef,
              setDuration,
              progressBarRef,
              handleNext,
            }}
          />
          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
              tracks,
              trackIndex,
              setTrackIndex,
              setCurrentTrack,
              handleNext,
            }}
          />
          <ProgressBar
            {...{ progressBarRef, audioRef, timeProgress, duration }}
          />
        </div>
        {/*<Comments currentTrack = {currentTrack}/>*/}
      </div>
    </>
      </UserContext.Provider>
  );
};
export default AudioPlayer;
