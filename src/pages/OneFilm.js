import { useContext } from "react";
import { useParams } from "react-router";
import FilmsContext from "../utils/FilmsContext";
import {Image, Navbar}from "react-bootstrap"
import { Link } from "react-router-dom";


function OneFilm() {
    const { filmId } = useParams()
    const { films } = useContext(FilmsContext)
    if (films.length === 0) return <h1>Loading...</h1>
  
    const film = films.find(film => film._id === filmId)
    return ( 
        <> 

 <div border="light" >
      
      <div class="row mb-5"  >
        <div class="col-md-12">
          <div class="row g-0  flex-md-row mb-4 ml-6 shadow-sm h-md-500 position-relative">
            <div class="col-auto d-lg-block">
            <Link to={`/film/${film._id}`}>
              <img variant="top" src={film.poster} height="400" width="300" style={{ borderRadius: "10px" }}/>
              </Link>
            </div>
            <div class="col p-4 d-flex flex-column ">
            <Link to={`/film/${film._id}`} className="text-black" style={{ textDecoration: "none" }}>
              <h3 class="mb-0 text-dark"> {film.title}</h3>
              </Link>
              <h3 class="mb-0 text-dark"> {film.description}</h3>
            </div>
          </div>
        </div>
        </div>
        </div>
</>

    );
}

export default OneFilm;