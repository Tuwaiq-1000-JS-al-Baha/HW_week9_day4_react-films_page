import { useContext } from "react"
import { Card } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import FilmsContext from "../utils/FilmsContext"

function OneFilm() {
  const { filmId } = useParams()
  const { films } = useContext(FilmsContext)
  if (films.length === 0) return <h1>Loading...</h1>

  const film = films.find(film => film._id === filmId)
  return (
    <div
    style={{
      objectFit: "contain",
      opacity: "0.3",
      height: "500px",
      width: "100%",
      backgroundImage:` url:("${film.poster}")`,
      position: "absolute",
      left: "0",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
    }}
  />
  <div border="light">
    <Row className="m-5">
      <Col>
        <Link to={`/film/${film._id}`}>
          <Image
            variant="top"
            src={film.poster}
            height="500px"
            style={{ width: "305px", opacity: "0.7", paddingTop: "45px" }}
          />
        </Link>
      </Col>
      <Col>
        <Card.Body>
          <Link to={`/film/${film._id}`} style={{ textDecoration: "none" }}>
            <Card.Title style={{ position: "relative", top: "60px", right: "250px", fontSize: "40px" }}>
              {film.title}
            </Card.Title>
          </Link>
          <Card.Text style={{ position: "relative", top: "60px", right: "250px", fontSize: "20px" }}>
            {film.description}
          </Card.Text>
        </Card.Body>
      </Col>
    </Row>
  </div>
     
  )
}

export default OneFilm
