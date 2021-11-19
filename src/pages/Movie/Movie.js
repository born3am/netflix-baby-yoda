import React, { useState, useEffect } from 'react'
import moviesData from "../../api/movies"
import { Modal } from 'react-bootstrap'
import { useParams } from "react-router"

import "./Movie.css"


export default function Movie() {
    // route ==> /movie/:id

    let { id } = useParams();
    const [movie, setMovie] = useState();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const getMovie = moviesData.find(i => i.id === id);
        setMovie(getMovie);
    }, [id]);



    return movie ? (
        <div className="Movie"
            style={{ backgroundImage: `url(${movie.image})` }}
        >
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <span className="Play" onClick={setIsOpen} >PLAY</span>

            <Modal
          show={isOpen}
          onHide={() => setIsOpen(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <iframe
            height="315"
            src={movie.video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen

          ></iframe>
        </Modal>


        </div>
    ) : (
        <div>Loading...</div>
    )
}
