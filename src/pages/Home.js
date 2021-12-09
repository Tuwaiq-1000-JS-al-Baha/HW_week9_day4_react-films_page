import { Col, Container, Form, Row, Button, Card, Nav } from "react-bootstrap"
import MovieList from "../components/MovieList"
import Showcase from "../components/Showcase"

function Home() {
  return (
    <>
      <Container>
        <Showcase />
        <Row>
          <MovieList listTitle="What's Popular" />
          <MovieList listTitle="Action" genreType="Action" />
          <MovieList listTitle="Drama" genreType="Drama" />
          <MovieList listTitle="Comdy" genreType="Comdy" />
        </Row>
      </Container>
    </>
  )
}

export default Home
