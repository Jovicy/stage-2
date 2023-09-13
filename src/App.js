import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<h1>Hello world</h1>}></Route>
          <Route path="/" element={<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  )
}