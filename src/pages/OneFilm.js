import { margin } from "@mui/system"
import { useContext } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import FilmsContext from "../utils/FilmsContext"

function OneFilm() {
  const { filmId } = useParams()
  const { films } = useContext(FilmsContext)
  if (films.length === 0) return <h1>Loading...</h1>

  const film = films.find(film => film._id === filmId)
  const sectionStyle = {
    backgroundImage: `url(${film.poster})`,
    backgroundSize: "100%",
    padding: "50px 0 50px 0",
  }
  return (
    <Card className="mt-5" style={sectionStyle}>
      <Row className="d-flex align-items-center justify-content-center">
        <Col>
          <Card.Img
            variant="top"
            src={film.poster}
            className="m-3"
            style={{ borderRadius: "10px", height: "25rem", width: "15rem" }}
          />
        </Col>
        <Col className="ms-2">
          <Row>
            <Card.Title>
              <h1>{film.title}</h1>
            </Card.Title>
          </Row>
          <Row>
            <Card.Text>{film.description}</Card.Text>
            <Card.Text>
              <h4>Rating:</h4>
            </Card.Text>
            <Card.Text>{film.ratingAverage}</Card.Text>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default OneFilm
