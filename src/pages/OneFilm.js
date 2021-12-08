import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import Cast from "../components/Cast"
import FilmsContext from "../utils/FilmsContext"

function OneFilm() {
  const { filmId } = useParams()
  const { films } = useContext(FilmsContext)
  if (films.length === 0) return <h1>Loading...</h1>

  const film = films.find(film => film._id === filmId)

  return (
    <>
      <Row className="mt-5 mx-5 bg-light">
        <Col style={{ padding: 0 }}>
          <div>
            <img variant="top" src={film.poster} height="400px" style={{ borderRadius: "10px", width: 500 }} />
          </div>
        </Col>
        <Col style={{ padding: 0 }}>
          <div className="mt-5">
            <h4>{film.title}</h4>

            <span>Rate: {film.ratingAverage}</span>
            <br />
            {film.genres.map(genre => (
              <h7>{genre.name} </h7>
            ))}

            <p className="text-muted">{film.description}</p>
            <h6>
              {film.director.firstName} {film.director.lastName}
            </h6>
            <span className="text-muted">Director</span>
          </div>
        </Col>
      </Row>
      <h3 className="m-5">Top Billed Cast</h3>
      <Row>
        <div className="mx-5">
          {film.actors.map(actor => (
            <Col>
              <Card border="light">
                <Link to={`/cast/${actor._id}`}>
                  <Card.Img
                    variant="top"
                    src={actor.photo}
                    height="220px"
                    style={{ borderRadius: "10px", width: 200 }}
                  />
                </Link>
                <Card.Body>
                  <Link to={`/cast/${actor._id}`} className="text-black" style={{ textDecoration: "none" }}>
                    <Card.Title>{actor.type}</Card.Title>
                  </Link>
                  <Card.Text className="text-muted">
                    {actor.firstName} {actor.firstName}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </Row>
    </>
  )
}

export default OneFilm
