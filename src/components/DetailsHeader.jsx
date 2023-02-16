import { Link } from "react-router-dom";
const DetailsHeader = ({artistsId,artistDetails,songData}) => {
 
const artist=artistDetails?.data[0].attributes;
  return  <div className="relative w-full flex flex-col">
  <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28"/>
  <div className="absolute inset-0 flex items-center">
   <img src={artistsId?
     artist?.artwork.url
     :songData?.images?.coverart} alt="Art"
     className="sm:w-48 w-28 sm:h-48 h-28  rounded-full border-2 shadow-xl shadow-black object-cover"/>
     <div className="ml-5 ">
     <p className="text-white font-bold sm:text-3xl text-xl">{artistsId?artist.name:songData?.title}</p>
     {!artistsId&&(
      <Link to={`/artist/${songData?.artists[0].adamid}`}>  
      <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
      </Link>
     )
     }
     <p className="text-base text-gray-400 mt-2">{artistsId?artist?.genreNames[0]:songData?.genres?.primary}</p>
     </div>
  </div>
  <div className="w-full sm:h-44 h-24"/>
   </div>
}
 


export default DetailsHeader;
