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
      <Card
        border="light"
        className="d-flex align-items-center p-5 mt-5 "
        style={{ backgroundColor: "rgba(141, 113, 79, 0.747)", width: "900px", marginLeft: "320px" }}
      >
        <Row>
          <Col>
            <img variant="top" src={film.poster} height="300px" style={{ borderRadius: "10px" }} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{film.title}</Card.Title>
              <Card.Text className="text-muted">{film.description}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Row>
        {film.actors.map(actor => (
          <Card border="light" className="m-5">
            <h2> Actors: </h2>
            <Card.Img variant="top" src={actor.photo} height="220px" style={{ borderRadius: "10px", width: "200px" }} />
            <Card.Body>
              <Card.Title>
                {actor.firstName} {actor.lastName}
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </>
  )
}

export default OneFilm
