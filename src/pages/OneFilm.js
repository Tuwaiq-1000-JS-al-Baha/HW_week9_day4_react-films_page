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
        <Col
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.2) 0%,rgba(255,255,255,0.6) 100%),  url("${film.poster}") `,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Row className="d-flex align-items-center justify-content-center">
            <Col>
              <Card.Img
                variant="top"
                className="m-3"
                src={film.poster}
                height="500px"
                style={{ borderRadius: "10px" }}
              />
            </Col>
            <Col className="ms-5">
              <Row>
                <Card.Title style={{ color: "white" }}>{film.title}</Card.Title>
              </Row>
              <Row>
                <Card.Text style={{ color: "white" }}>{film.ratingAverage}</Card.Text>
                <Card.Text style={{ color: "white" }}>{film.description}</Card.Text>
              </Row>
            </Col>
          </Row>
        </Col>
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
