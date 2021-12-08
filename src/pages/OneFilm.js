import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import FilmsContext from "../utils/FilmsContext"

function OneFilm() {
  const { filmId } = useParams()
  const { films } = useContext(FilmsContext)
  if (films.length === 0) return <h1>Loading...</h1>

  const film = films.find(film => film._id === filmId)
  return (
    <>
      <Card border="light">  
      <Row className="mt-5 mx-5 bg-light">
        <Col >
            <img variant="top" src={film.poster} height="400px" style={{ borderRadius: "10px", width: 400 }} />
          </Col>
          <Col >
          <div className="mt-5 ">
            <h3>{film.title}</h3>
            <span>Rate: {film.ratingAverage}</span>
            <br />
            {film.genres.map(genre => (
              <p>{genre.name} </p>
            ))}
            <p className="text-muted">{film.description}</p>
            <h4>
              {film.director.firstName} {film.director.lastName}
            </h4>
            <span className="text-muted">Director</span>
          </div>
          
          
        </Col>
      </Row>
        
      </Card>
      
    </>
  )
}

export default OneFilm
