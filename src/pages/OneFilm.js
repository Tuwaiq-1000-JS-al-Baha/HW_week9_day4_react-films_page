import { useContext } from "react"
import { Card, Image, Container, Col, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import FilmsContext from "../utils/FilmsContext"
import "../style.css"

function OneFilm() {
  const { filmId } = useParams()
  const { films } = useContext(FilmsContext)
  if (films.length === 0) return <h1>Loading...</h1>

  const film = films.find(film => film._id === filmId)
  return (
    <header className="header123">
      <div
        style={{
          objectFit: "contain",
          opacity: "0.3",
          height: "500px",
          width: "100%",
          backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvh1m3yvATmxYCWQJqAhwaHcrL-BWYYg0NqA&usqp=CAU)`,
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
          {/* style={{backgroundImage:`url(${film.poster})`,backgroundImage:`linear-gradient(90deg, rgba(200,82,186,1) 0%, rgba(92,157,209,1) 0%, rgba(70,29,65,1) 0%, rgba(56,70,77,1) 0%, rgba(0,2,4,1) 0%, rgba(0,0,0,1) 0%) ,  url(${film.poster})`, backgroundBlendMode:"overlay"  , backgroundRepeat:"no-repeat" , backgroundPosition:"center" , backgroundSize:"cover" , padding:"60px"}} */}
          {/* style={{position:"absolute" , top:"0" , left:"0" ,opacity:"0.3" , zIndex:"-3" }} */}
          <Col>
            <Link to={`/film/${film._id}`}>
              <Image
                variant="top"
                src={film.poster}
                height="450px"
                style={{ width: "300px", opacity: "0.9", paddingTop: "40px" }}
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
              <Card.Text style={{ position: "relative", top: "60px", right: "250px", fontSize: "2px" }}>
                {film.description}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </div>
    </header>
  )
}

export default OneFilm
