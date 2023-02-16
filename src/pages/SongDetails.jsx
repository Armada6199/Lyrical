
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {DetailsHeader,Error,Loader,RelatedSongs} from "../components"
import { setActiveSong,playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery,useGetSongRelatedQuery } from "../redux/features/services/shazamCore";
const SongDetails = () =>{
const dispatch=useDispatch();
const {songid}=useParams();
const {activeSong,isPlaying}=useSelector((state)=>state.player);
const {data:songDetailsData,isFetching:isFetchingDetail}=useGetSongDetailsQuery({songid});
const {data:relatedData,isFetching:isFetchinRelated,error}=useGetSongRelatedQuery({songid});

const handlePauseClick=()=>{
    
    dispatch(playPause(false))  
  }
  const handlePlayClick=(song,i)=>{
dispatch(setActiveSong({song,relatedData,i}));
dispatch(playPause(true))
  }
if(isFetchinRelated||isFetchingDetail) return <Loader/>
if(error) return <Error/>
return(
    <div className="flex flex-col">
        <DetailsHeader
        artistsId=""
        songData={songDetailsData}
        />
        <div className="mb-10">
            <h2 className="text-white text-3xl font-bold ">Lyrics</h2>
            <div className="mt-5">
             {songDetailsData?.sections[1].type==="LYRICS"?
            songDetailsData?.sections[1].text.map((line,i)=>(<p className="text-white text-base my-1">{line}</p>))
            :<p className="text-white text-base my-1">Sorry There Is No Lyrics For This Song</p>
            }
            </div>
        </div>
        <RelatedSongs
        data={relatedData}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
        

        />
    </div>
)

}


export default SongDetails;
 