import { CardHeader } from "@mui/material"
import { useContext } from "react"
import { Card, Container, Row, Col, Image } from "react-bootstrap"
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
        <Link to={`/film/${film._id}`}>
          <Card.Img variant="top" src={film.poster} height="220px" style={{ borderRadius: "10px" }} />
        </Link>
        <Card.Body>
          <Link to={`/film/${film._id}`} className="text-black" style={{ textDecoration: "none" }}>
            <Card.Title>{film.title}</Card.Title>
          </Link>
          <Card.Text className="text-muted">{film.description}</Card.Text>
        </Card.Body>
      </Card>
      <Container className="mt-5 md-3">
        <Row className="">
          <Col md="6">
            <h3> Owner</h3>
          </Col>
          <Col md="6">
            <Image src={film._user.poster} style={{ heigt: 200 }} />
          </Col>
          <Col md={4}>
            <h3>
              {film._user.firstName} {film._user.lastName}
            </h3>
          </Col>
        </Row>

        <Row className="mt-5 d=flex align-items-center">
          <Col>
            <Image src={film.poster} style={{ height: 400 }} thumbnail />
          </Col>

          <Col>
            <Card>
              <CardHeader>
                <Card.Title className="text-center">{film.title} </Card.Title>
              </CardHeader>
              <Card.Body style={{ height: 200 }}>
                <Card.Text className="text-center">{film.description} </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default OneFilm
