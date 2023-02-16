import React from 'react';
import { ArtistCard,Loader,Error} from '../components';
import { useGetTopChartsQuery } from '../redux/features/services/shazamCore';
const TopArtists = () => {
    const {data,isFetching,error}=useGetTopChartsQuery()
    if(isFetching) return <Loader title="Loading Top Charts"/>
    if(error&&country) return <Error/>
  console.log
    return (
        <div className='flex flex-col '>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Discover Top Artists</h2>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((track,i)=>{
                    return <ArtistCard 
                    key={track.key}
                    track={track}
                    />
                })}
            </div>
        </div>
    )
 console.log(country)
};

export default TopArtists;
