import React,{useState,useEffect} from "react";
import './banner.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle,faPlusSquare} from '@fortawesome/free-regular-svg-icons';
import axios from "../../axios";
import { API_KEY ,imageUrl} from "../../config/constant";




const Banner = () => {
    const [movies,setMovies] = useState() 

    useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data);
        const movie = response.data.results[Math.floor(Math.random() * response.data.results.length)];
        // console.log("random",randomElement);
        setMovies(movie);
    })

    },[])


    return(
        <div className="banner" 
        style={{backgroundImage:`url(${imageUrl+movies?.backdrop_path})`}}>
            <div className="titleDiv">
              <h1 className="title" >{movies?.title}</h1>
              </div>
            <div className="content">
              <div className="descriptionDiv">
              <h4 className="description">{movies?.overview}</h4>
                </div>
                <div className="btnDiv">
                    <button className="btn" style={{backgroundColor:'red',color:'white'}}><FontAwesomeIcon icon={faPlayCircle} color="white"/> PLAY</button>
                    <button className="btn"style={{backgroundColor:'gray',color:'white'}} ><FontAwesomeIcon icon={faPlusSquare} color="white"/> MY LIST</button>
                </div>
            </div>
            <div className="fade"> </div>

        </div>
    )
}

export default Banner