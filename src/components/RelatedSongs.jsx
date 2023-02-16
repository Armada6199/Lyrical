import SongBar from './SongBar'
const RelatedSongs = ({isPlaying,activeSong,handlePauseClick,handlePlayClick,data,artistId}) => {
 if(artistId){
  data=data.filter(e=>{
    return e?.attributes?.title==="Top Songs"
      })
 } 
  // console.log(data,"this is the filtered data")
  return (
    <div className='flex flex-col'>
    <h1 className='font-bold text-3xl text-white'>Related Songs:</h1>
<div className='mt-6 w-full flex flex-col'>
  
  
{data[0]?.data.map((song,i)=>(
  <SongBar key={`${song.key}-${artistId}`}
  song={song}
  i={i}
  artistId={artistId}
  isPlaying={isPlaying}
  activeSong={activeSong}
  handlePauseClick={handlePauseClick}
  handlePlayClick={handlePlayClick}
  />
))}
</div>
  </div>
  )

}



export default RelatedSongs;
