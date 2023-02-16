import{createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

    export const shazamCoreApi=createApi({
        //name of our api we can call it in the store in the provider
        reducerPath:"shazamCoreApi",
        //function call to fetch base query based on an object
    baseQuery:fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/',
        //this is gonna prepare the headers before each api call
        prepareHeaders:(headers)=>{
headers.set('X-RapidAPI-Key','e3afcba7edmsh0fbb89eb85c7ad4p1ebc83jsn3814bdbf8f59')
return headers;
        }
    }),
    //specify the end points 
    endpoints:(builder)=>({
        getTopCharts:builder.query({
            query:()=>'v1/charts/world'
        }),
        getSongDetails:builder.query({
            query:({songid})=>`v1/tracks/details?track_id=${songid}`
        }),
        getSongRelated:builder.query({
            query:({songid})=>`v1/tracks/related?track_id=${songid}`
        }),
        getArtistDetails:builder.query({
            query:(artistId)=>`v2/artists/details?artist_id=${artistId}`}),
            getSongsByCountry:builder.query({
                query:(countryCode)=>`v1/charts/country?country_code=SA`}),
                getSongsByGenre:builder.query({
                    query:(genre)=>`v1/charts/genre-world?genre_code=${genre}`}),
                    getSongsBySearch:builder.query({
                        query:(searchTerm)=>`v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
    }),
   
})
    
    



    
    export const {
        //takes the name  getTopCharts and adds the use in the front and the query at the end 
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery,
      useGetSongsByCountryQuery,
      useGetSongsByGenreQuery,
      useGetSongsBySearchQuery,
      
    }=shazamCoreApi;