import { useNavigate } from "react-router-dom";
const ArtistCard = ({track,}) => {
  const navigate=useNavigate()//react hook to move to diffrent pages
 return (
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <img src={track?.images?.coverart} alt="Artist"
    className="w-full h-56 rounded-lg"
    onClick={()=>{
      navigate(`/artists/${track?.artists[0].adamid}`)
    }}
    />
    <p className="mt-4 font-semibold text-white truncate text-lg">{track?.subtitle}</p>
  </div>
 )
};

export default ArtistCard;
