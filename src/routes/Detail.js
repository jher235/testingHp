import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import Movie from "../components/Movie"
function Detail(){
    const {num} = useParams();
    const [loading,setLoading] = useState(true);
    const [movie,setMovie] = useState();
    const getMovies= async()=>{
        const json = await(
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${num}`)
      ).json();
        console.log(json.data.movie);
        
        setMovie(json.data.movie);
     
        //console.log(movie);
    };
    
    useEffect(()=>{
      getMovies();
       
        
    },[])
    
    useEffect(()=>{
        if(movie){console.log(movie);
        setLoading(false);
      }
      }
        ,[movie])

    return <div>
      
     {loading ? <h1>loading...</h1> : 
     <div>
        <Movie 
        key = {movie.id}
        id = {movie.id}
        mci = {movie.large_cover_image}
        title = {movie.title_long}
        genres = {movie.genres}
        url = {movie.url}
         />

    </div>
     }
    </div>
}



export default Detail;