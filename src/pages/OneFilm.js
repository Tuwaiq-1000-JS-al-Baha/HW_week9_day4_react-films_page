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
      <Row
        style={{
          backgroundImage: `linear-gradient(rgba(2,25,160, 0.5), rgba(255,255,255, 0.3)),  url("${film.poster}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Col md="4">
          <img variant="top" src={film.poster} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>
        <Col md={{ offset: 1 }}>
          <h1>{film.title}</h1>
          <div className="mb-2">
            {film.genres.map(genre => (
              <span>{genre.name}</span>
            ))}
          </div>
        </Col>
      </Row>
    </>
  )
}

export default OneFilm
