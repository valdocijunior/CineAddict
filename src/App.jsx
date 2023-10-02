import React from "react";

import "./App.css";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Popcorn from "./assets/popcorn.png";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <MovieList type="popular" title="Populares" emoji={Fire} />
      <MovieList type="top_rated" title="Mais bem avaliados" emoji={Star} />
      <MovieList type="upcoming" title="Próximos lançamentos" emoji={Popcorn} />
    </div>
  );
};

export default App;
