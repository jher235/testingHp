import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import styles from "./Movie.module.css"
function Movie({id,mci,title,genres,summary,url,year}){
    return (<div className={styles.movie}>
    <img className={styles.movie__img} src={mci} alt={title}/>
    <h2 className={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></h2>
    <ul className={styles.movie__genres}>{genres!==null ? (genres.map((gr) => <li key={gr}>{gr}</li>)) : null}</ul>
    <h3 className={styles.movie__year}>{year}</h3>
    <p>{
        summary
            ? summary.length>235
                ? summary.slice(0,235)+"..."
                : summary
            :"summary dosen't exist"
                
        
    }</p>
    {url &&  <p><a href ={`${url}`} target="_blank">Link</a> </p>}
        
    </div>);
}

Movie.propTypes ={
    id: PropTypes.number.isRequired,
    mci: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    //genres: PropTypes.arrayOf(PropTypes.string).isRequired

}

export default Movie;



 