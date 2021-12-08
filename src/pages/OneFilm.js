import { display } from "@mui/system"
import { useContext } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router"
import FilmsContext from "../utils/FilmsContext"
import "./OneFilm.css"
function OneFilm() {
  const { filmId } = useParams()
  const { films } = useContext(FilmsContext)
  if (films.length === 0) return <h1>Loading...</h1>

  const film = films.find(film => film._id === filmId)
  return (
    <>
      <div className="content">
        <div className="div">
          <Card className="mt-5">
            <Row className="d-flex align-items-center justify-content-center">
              <Col>
                <Card.Img
                  variant="top"
                  className="poster"
                  src={film.poster}
                  height="500px"
                  style={{ borderRadius: "10px" }}
                />
              </Col>
              <div className="text">
                <Col className="ms-5" id="col">
                  <Row>
                    <Card.Title id="title">{film.title}</Card.Title>
                  </Row>
                  <Row>
                    <Card.Text>{film.ratingAverage}/5</Card.Text>
                    <Card.Text className="text-muted" id="desc">
                      {film.description}
                    </Card.Text>
                  </Row>
                </Col>
              </div>
            </Row>
          </Card>
        </div>
        <div>
          <h4 className="m-3"> Actors</h4>
          <Row className="m-3">
            {film.actors.map(actor => (
              <Col>
                <Card>
                  <Card.Img className="poster" variant="top" src={actor.photo} style={{ borderRadius: "10px" }} />
                  <Card.Title className="ms-4">
                    {actor.firstName} {actor.lastName}
                  </Card.Title>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  )
}

export default OneFilm
