import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { useParams } from "react-router"
import FilmsContext from "../utils/FilmsContext"

function OneFilm() {
  const { filmId } = useParams()
  const { films } = useContext(FilmsContext)
  if (films.length === 0) return <h1>Loading...</h1>

  const film = films.find(film => film._id === filmId)

  return (
    <>
      <Row
        className="m-4"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%),  url("${film.poster}") `,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "650px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          opacity: "0.9",
        }}
      >
        <Row>
          <Card.Img className="m-3" style={{ width: 400, height: 500, borderRadius: "12px" }} src={film.poster} />

          <Col>
            <Card.Body>
              <Card.Title style={{ color: "black", fontSize: 30 }}>{film.title}</Card.Title>
              <Card.Text className="text-muted" style={{ color: "black", fontSize: 15 }}>
                {film.description}
              </Card.Text>
              <Card.Text
                className="text-muted"
                style={{ background: "black", borderRadius: "60%", width: 30, textAlign: "center" }}
              >
                {film.ratingAverage}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Row>
    </>
  )
}

export default OneFilm
