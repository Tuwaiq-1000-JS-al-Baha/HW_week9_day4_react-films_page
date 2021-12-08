import { useContext } from "react"
import { Card, Row, Col, Container } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import FilmsContext from "../utils/FilmsContext"
// import Styles from"./moduleOneFilm.css"

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
        backgroundImage: `url("${film.poster}")`,
        backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
           height:"80vh"
          
      }}
      >


     
          

          <Col>
            <Link to={`/film/${film._id}`}>
              <Card.Img variant="top" src={film.poster} height="400px" style={{ borderRadius: "10px" }} />
            </Link>
            </Col>

              <Col>
              <Card.Body>
                <Link to={`/film/${film._id}`} className="text-white mt-5" style={{textAlign:"center",   textDecoration: "none", }}>
                  <Card.Title>{film.title}</Card.Title>
                </Link>
                <Card.Text className="text-white mt-4" style={{textAlign:"center"}}>{film.description}</Card.Text>
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
