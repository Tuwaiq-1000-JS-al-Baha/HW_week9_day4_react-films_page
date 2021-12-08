import { color } from "@mui/system"
import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import FilmsContext from "../utils/FilmsContext"

function OneFilm() {
  const { filmId } = useParams()
  const { films } = useContext(FilmsContext)
  const film = films.find(film => film._id === filmId)
  return (
    <>
      {/* <Card border="light">
        <Link to={`/film/${film._id}`}>
          <Card.Img variant="top" src={film.poster} height="220px" style={{ borderRadius: "10px" }} />
        </Link>
        <Card.Body>
          <Link to={`/film/${film._id}`} className="text-black" style={{ textDecoration: "non" }}>
            <Card.Title>{film.title}</Card.Title>
          </Link>

          <Card.Text className="text-muted">{film.description}</Card.Text>
        </Card.Body>
      </Card> */}
      <div>
        <Row
          style={{
            backgroundImage: `url("${film.poster}") `,
            height: "600px",
            opacity: "0.3",
            backgroundSize: "cover",
            marginTop: "10px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Col>
            <Link to={`/film/${film._id}`}>
              <Card.Img
                variant="top"
                src={film.poster}
                height="220px"
                style={{ borderRadius: "10px", width: 350, height: 550, marginTop: "17px" }}
              />
            </Link>
          </Col>
          <Col>
            <Link
              to={`/film/${film._id}`}
              className="text-black"
              style={{ position: "relative", top: "80px", right: "200px" }}
            >
              <Card.Title>{film.title}</Card.Title>
            </Link>

            <Card.Text style={{ position: "relative", top: "90px", fontSize: "60px" }}>{film.description} </Card.Text>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default OneFilm
