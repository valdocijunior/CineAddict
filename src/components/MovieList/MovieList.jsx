import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ type, title, emoji }) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "cresc",
  });

  useEffect(() => {
    fetchMovies();
  }, [type]);

  useEffect(() => {
    if (sort.by !== "defalt") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    }
  }, [sort]);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=a792870f70dce64ab7e6dfd5ce4abea1`
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);

      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {title}{" "}
          <img src={emoji} alt={`${emoji} icon`} className="navbar_emoji" />
        </h2>
        <div className="align_center movie_list_fs">
          <FilterGroup minRating={minRating} onRatingClick={handleFilter} />
          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">Filtrar por</option>
            <option value="release_date">Data de Lançamento</option>
            <option value="vote_average">Avaliações</option>
          </select>
          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className="movie_sorting"
          >
            <option value="cresc">Crescente</option>
            <option value="desc">Decrescente</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
