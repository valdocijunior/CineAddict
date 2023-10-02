import React from "react";

const FilterGroup = ({ minRating, onRatingClick }) => {
  return (
    <ul className="align_center movie_filter">
      <li
        className={
          minRating === 8 ? "movie_filter_item active" : "movie_filter_item"
        }
        onClick={() => onRatingClick(8)}
      >
        Nota 8+
      </li>
      <li
        className={
          minRating === 7 ? "movie_filter_item active" : "movie_filter_item"
        }
        onClick={() => onRatingClick(7)}
      >
        Nota 7+
      </li>
      <li
        className={
          minRating === 6 ? "movie_filter_item active" : "movie_filter_item"
        }
        onClick={() => onRatingClick(6)}
      >
        Nota 6+
      </li>
    </ul>
  );
};

export default FilterGroup;
