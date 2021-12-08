import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import "./App.css"
import { Route, Routes } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import FilmsContext from "./utils/FilmsContext"
import OneFilm from "./pages/OneFilm"

function App() {
  const [films, setFilms] = useState([])

  const getFilms = async () => {
    const response = await axios.get("http://localhost:5000/api/films")
    setFilms(response.data)
  }

  useEffect(() => {
    getFilms()
  }, [])

  const store = {
    films: films,
  }

  return (
    <FilmsContext.Provider value={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:filmId" element={<OneFilm />} />
      </Routes>
    </FilmsContext.Provider>
  )
}

export default App
