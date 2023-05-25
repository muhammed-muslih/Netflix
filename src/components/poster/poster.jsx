import React ,{useEffect, useState}  from "react";
import './poster.css';
import axios from '../../axios'
import { imageUrl ,API_KEY} from "../../config/constant";
import Video from 'react-youtube'



const Poster =(props)=>{
    
    const [movies,setMovies] = useState([])
    const [videoId,setVideoId] = useState("")
    useEffect(()=>{

        axios.get(props?.url).then((response)=>{
            setMovies(response?.data?.results)

        })

    },[])

    const opts = {
        height: '650',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }

    const getMovie = async (id)=>{
       
        axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((response)=>{
            console.log(response?.data?.results[0]?.key);
           response?.data?.results[0]? setVideoId(response.data.results[0]):console.log("video not found");
        })
    
        
    }   
    
    const videoFunction = (key)=>{
      
       return  <Video  videoId={key} opts={opts}  onReady={(e)=>{
        e.target.pauseVideo();

       }}   />
      

    }

    return(
        <div className="posterDiv">
            <h2 style={{marginLeft:'20px'}}>{props?.title}</h2>
            <div className="posters">
                {movies.map((movie)=>
                
                <img  onClick={()=>getMovie(movie.id)} src={`${imageUrl+movie?.backdrop_path}`}  alt="poster" className={props?.isSmallImage ? 'posterImage': 'originPosterImage'} key={movie?.id} />

                )}
                
            </div>
            {videoId.key ? videoFunction(videoId.key) :"" }
        </div>
    )
}

export default Poster;