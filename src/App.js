import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Movie from './pages/movie details/Movie';


export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Header/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="/*" element={<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  )
}