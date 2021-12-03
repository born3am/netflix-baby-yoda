import "./TvShow.css";
import React from "react";
import { useParams } from "react-router-dom";

export default function TvShow() {

  const { tvShowId } = useParams()


  console.log('====================================');
  console.log('tvShowId', tvShowId);
  console.log('====================================');

  return (
    <div>

      <h1>TvShow Title</h1>

      <div>Seasons</div>
      <div>Episodes</div>

    </div>
  )
}


