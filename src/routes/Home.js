import {useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading,setLoading] = useState(true)
  const [movies,setMovies] = useState([])
  const getMovies = async() =>{
    const json = await( await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
    `)).json();
    setMovies(json.data.movies)
    setLoading(false);
  }
  useEffect(()=>{
    getMovies()
  },[])
  //  console.log(moives)
  return (
      <div className={styles.container}>
       {loading ? <h1 className={styles.loader}>Loading...</h1> : 
       <div className={styles.movies}> 
        {movies.map((movie) =>( 
        <Movie 
          key = {movie.id}
          id = {movie.id}
          mci={movie.medium_cover_image}
          year={movie.year} 
          title={movie.title} 
          genres={movie.genres} 
          summary ={movie.summary} 
          />))}
       </div>} 
       
     </div>
  );
}

export default Home;

