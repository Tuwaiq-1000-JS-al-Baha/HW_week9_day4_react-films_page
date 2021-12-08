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
      <Card className="mt-5">
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <Card.Img variant="top" className="m-3" src={film.poster} height="500px" style={{ borderRadius: "10px" }} />
          </Col>
          <Col className="ms-5">
            <Row>
              <Card.Title>{film.title}</Card.Title>
            </Row>
            <Row>
              <Card.Text>{film.ratingAverage}</Card.Text>
              <Card.Text className="text-muted">{film.description}</Card.Text>
            </Row>
          </Col>
        </Row>
      </Card>
      <h5 className="m-3"> top build cast</h5>
      <Row className="m-3">
        {film.actors.map(actor => (
          <Col>
            <Card>
              <Card.Img variant="top" src={actor.photo} height="200px" width="100px" style={{ borderRadius: "10px" }} />
              <Card.Title className="ms-4">
                {actor.firstName} {actor.lastName}
              </Card.Title>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default OneFilm
