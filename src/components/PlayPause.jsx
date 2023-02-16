import {FaPauseCircle,FaPlayCircle} from 'react-icons/fa'
//we import the icons then we use the props we passed and compare with with the state in the redux playslice if it matches show the corresponding icon
const PlayPause = ({isPlaying,activeSong,song,handlePause,handlePlay}) => {

  return(isPlaying&&activeSong?.title===song.title?(<FaPauseCircle size={35} className="text-white" onClick={handlePause}/>):(<FaPlayCircle size={35} className="text-white" onClick={handlePlay}/>))

}




export default PlayPause;
