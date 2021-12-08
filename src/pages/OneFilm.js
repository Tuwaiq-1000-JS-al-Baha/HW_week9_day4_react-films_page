import { height } from "@mui/system"
import Overlay from "@restart/ui/esm/Overlay"
import { useContext } from "react"
import { Card, Col, Container, Row , Image } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import FilmsContext from "../utils/FilmsContext"
import "../App.css"

function OneFilm() {
  const { filmId } = useParams()
  const { films } = useContext(FilmsContext)
  if (films.length === 0) return <h1>Loading...</h1>

  const film = films.find(film => film._id === filmId)
  return (
      <header className="header123" >
      <div style={{objectFit:"cover" , opacity:"0.1" ,  height:"500px" , width:"100%"  , backgroundImage:`url(${film.poster})` , position:"absolute"  , left:"0" , backgroundRepeat:"no-repeat"  }} />
    
    
      <div  border="light">
      <Row className="m-5">
      {/* style={{backgroundImage:`url(${film.poster})`,backgroundImage:`linear-gradient(90deg, rgba(200,82,186,1) 0%, rgba(92,157,209,1) 0%, rgba(70,29,65,1) 0%, rgba(56,70,77,1) 0%, rgba(0,2,4,1) 0%, rgba(0,0,0,1) 0%) ,  url(${film.poster})`, backgroundBlendMode:"overlay"  , backgroundRepeat:"no-repeat" , backgroundPosition:"center" , backgroundSize:"cover" , padding:"60px"}} */}
      {/* style={{position:"absolute" , top:"0" , left:"0" ,opacity:"0.3" , zIndex:"-3" }} */}
       
      
          <Col>
            <Link to={`/film/${film._id}`}>
              <Image 
                variant="top"
                src={film.poster}
                height="450px"
                style={{ borderRadius: "10px", width: "300px" , opacity:"1" }}
              />
            </Link>
          </Col>
          <Col>
            <Card.Body>
              <Link to={`/film/${film._id}`} className="text-black" style={{ textDecoration: "none" }}>
                <Card.Title>{film.title}</Card.Title>
              </Link>
              <Card.Text className="text-muted">{film.description}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </div>
      
    
      </header>

  )
}

export default OneFilm
