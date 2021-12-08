import { useContext } from "react"
import { Card, Col } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import FilmsContext from "../utils/FilmsContext"

function Cast() {
  const { films } = useContext(FilmsContext)
  const { actorId } = useParams()

  const actor = films.find(film => film.actors._id === actorId)
  if (!actor) return <h1>Loading...</h1>

  return (
    <>
      <Col>
        <Card border="light">
          <Card.Img variant="top" src={actor.photo} height="220px" style={{ borderRadius: "10px" }} />
          <Card.Body>
            <Card.Title>{actor.type}</Card.Title>

            <Card.Text className="text-muted">
              {actor.firstName} {actor.firstName}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default Cast
