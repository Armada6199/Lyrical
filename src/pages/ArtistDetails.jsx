import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
import {DetailsHeader,Error,Loader,RelatedSongs} from "../components"
import { useGetArtistDetailsQuery } from "../redux/features/services/shazamCore";
import { data } from "autoprefixer";
const ArtistDetails = () =>{
const {id:artistId}=useParams();
const {activeSong,isPlaying}=useSelector((state)=>state.player);
const {data:artistDetails,isFetching:isFetchingArtistDetails,error}=useGetArtistDetailsQuery(artistId)
if(isFetchingArtistDetails) return <Loader title="Loading Artist Details"/>
if(error) return <Error/>

return(
    <div className="flex flex-col">
        <DetailsHeader
        artistsId={artistId}
        artistDetails={artistDetails}
        />
   
        <RelatedSongs
        data={Object.values(artistDetails?.data[0].views)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        />
    </div>
)

}


export default ArtistDetails;
 