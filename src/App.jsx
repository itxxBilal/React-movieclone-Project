import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import Footer from './components/Fotter/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="movies/:type" element={<MovieList />} />
            <Route path="/*" element={<h1>Error Page</h1>} />
          </Routes>
        </div>
        <Footer /> {/* Include the Footer component */}
      </Router>
    </div>
  );
}

export default App;
