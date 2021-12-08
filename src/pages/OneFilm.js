import { useContext } from "react"
import { Card, Row, Col, Image } from "react-bootstrap"
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
      <div
        style={{
          objectFit: "contain",
          opacity: "0.4",
          backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1-IOUAej-IexBNvG4zUBJbNzJvIkPiwkkLw&usqp=CAU)`,
          position: "absolute",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
        }}
      />
      <Row className="m-5">
        <Col>
          <Link to={`/film/${film._id}`}>
            <Image
              variant="top"
              src={film.poster}
              height="500px"
              style={{
                opacity: "0.9",
                width: "400px",
                paddingTop: "20px",
              }}
            />
          </Link>
        </Col>
        <Col>
          <Card.Body>
            <Link
              to={`/film/${film._id}`}
              style={{
                textDecoration: "none",
              }}
            >
              <Card.Title>{film.title}</Card.Title>
            </Link>
            <Card.Text
              style={{
                top: "60px",
                right: "250px",
                fontSize: "15px",
              }}
            >
              {film.description}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </>
  )
}

export default OneFilm
