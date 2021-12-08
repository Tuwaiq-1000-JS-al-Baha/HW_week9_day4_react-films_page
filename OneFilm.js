import { useContext } from "react"
import { Col, Row, Card, Container } from "react-bootstrap"
import { useParams } from "react-router"
import FilmsContext from "../utils/FilmsContext"

function OneFilm() {
  const { films } = useContext(FilmsContext)
  const { filmId } = useParams()
  if (!films) return <h1>Loading</h1>
  const film = films.find(film => film._id === filmId)
  return (
    // <Container>
    //   <Col>
    //     <img src={film.poster} height={400} style={{ borderRadius: "10px" }} />

    //     <Row>
    //       <h1>hello</h1>
    //     </Row>
    //   </Col>

    <>
      <Row>
        <Col
          style={{
            margin: 40,
            backgroundImage: `url("https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/5YTM1bh3Jyfy9IP2eS64W3JDeGs.jpg")`,

            backgroundColor: "black",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Container className="d-flex align-items-center">
            <img
              className="overlay-gradient has-bg-img rounded h-10rem my-2"
              src={film.poster}
              height={400}
              style={{ borderRadius: "10px" }}
            />
            <Row>
              <Card.Title>{film.title}</Card.Title>

              <Card.Title>{film.ratingAverage}</Card.Title>
              <Card.Text>{film.description}</Card.Text>

              <Card.Text>{film.casts.actors}</Card.Text>

              <Card.Text>{film.casts.director}</Card.Text>
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  )
}

export default OneFilm
