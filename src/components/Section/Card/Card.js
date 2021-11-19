import React from "react";
import "./Card.css";

import { Link } from "react-router-dom";

export default function Card({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="card">
      <article
        className="Card"
        style={{ backgroundImage: `url(${movie.image})` }}
      >
        <h4>{movie.title}</h4>

      </article>
    </Link>
  )
}
