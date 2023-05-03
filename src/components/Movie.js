import PropTypes from "prop-types";
import {Link} from "react-router-dom"
function Movie({id,mci,title,genres,summary,url}){
    return (<div>
    <img src={mci} alt={title}/>
    <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
    <ul>{genres!==null ? (genres.map((gr) => <li key={gr}>{gr}</li>)) : null}</ul>
    <p>{summary ? summary: "summery dosen't exist"}</p>
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



 