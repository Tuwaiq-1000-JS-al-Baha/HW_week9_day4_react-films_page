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
      <Row>
        <Col
          className=" m-4"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%),  url("${film.poster}") `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Col className="d-flex align-items-center" md="5">
            <Link to={`/film/${film._id}`}>
              <Col className="mt-5 mb-5 ms-5 md-3">
                <Card.Img
                  variant="top"
                  border="light"
                  src={film.poster}
                  height="400px"
                  style={{ borderRadius: "10px" }}
                />
              </Col>
            </Link>
            <Col>
              <Card.Body>
                <Link to={`/film/${film._id}`} className="text-black" style={{ textDecoration: "none" }}>
                  <Col className="d-flex align-items-center" md="5">
                    <Card.Title>{film.title}</Card.Title>
                    <Card.Title>{film.ratingAverge}</Card.Title>
                  </Col>
                </Link>
              </Card.Body>
            </Col>
          </Col>
        </Col>
      </Row>
    </>
  )
}
export default OneFilm
