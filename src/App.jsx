import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Popcorn from "./assets/popcorn.png";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import SingleMovie from "./components/MovieList/SingleMovie";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <MovieList type="popular" title="Populares" emoji={Fire} />
            }
          />
          <Route
            path="/top_rated"
            element={
              <MovieList
                type="top_rated"
                title="Mais bem avaliados"
                emoji={Star}
              />
            }
          />
          <Route
            path="/upcoming"
            element={
              <MovieList
                type="upcoming"
                title="Próximos lançamentos"
                emoji={Popcorn}
              />
            }
          />
          <Route path="/movie/:movieId" element={<SingleMovie />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
