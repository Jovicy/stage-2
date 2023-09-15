import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Movie from './pages/movie details/Movie';


export default function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact element={<Header/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}