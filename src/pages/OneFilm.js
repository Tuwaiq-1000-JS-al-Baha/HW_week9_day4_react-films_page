import { useContext } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import FilmsContext from "../utils/FilmsContext"
import { Card, Row, Col, Container } from "react-bootstrap"

function OneFilm() {
  const { filmId } = useParams()
  const { films } = useContext(FilmsContext)
  if (films.length === 0) return <h1>Loading...</h1>

  const film = films.find(film => film._id === filmId)
  return (
    <>
  
      <Card border="light">
      <Container>
        <Row>
      <div
      className="bg-image d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/3953965/pexels-photo-3953965.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`,
        margin: 40,
        backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
           height:"80vh",
           display: "flex",
           flexDirection: "column",
           justifyContent: "center",

      }}
      >
        <Col>
        <Link to={`/film/${film._id}`}>
          <Card.Img variant="top" src={film.poster} height="220px" style={{ borderRadius: "10px" }} />
        </Link>
        </Col>
        <Col>
        <Card.Body>
          <Link to={`/film/${film._id}`} className="text-black" style={{ textDecoration: "none" }}>
            <Card.Title>{film.title}</Card.Title>
          </Link>
          <Card.Text className="text-muted">{film.description}</Card.Text>
        </Card.Body>
        </Col>
        </div>
        </Row>
        </Container>
      </Card>
      
    </>
  )
}

export default OneFilm
