import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import { useParams, useHistory } from "react-router-dom";
import requests from "../../Requests";
import axios from "axios";

const MovieDetails = () => {
  const { movie: movieId } = useParams();
  const [movie, setMovie] = useState({});

  const history = useHistory();
  console.log("Params: ", movieId);

  useEffect(() => {
    if (movieId) {
      const fetchData = async () => {
        const response = await axios.get(
          `${requests.fetchMovieDetails(
            movieId
          )}&append_to_response=credits, similar`
        );
        console.log("Movie Details: ", response.data);

        setMovie(response.data);

        return response;
      };

      fetchData();
    }
  }, []);

  const handleRouteBack = () => history.goBack();

  console.log("Movie: ", movie);
  return (
    <div className="movie">
      <header
        className="movie__banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <i
          onClick={handleRouteBack}
          className="fa-solid fa-circle-arrow-left fa-2x movie__backIcon"
        ></i>

        <h1 className="movie__name">{movie?.title}</h1>
        {/* <div className="movie__interactions">
            <button className="movie__playButton">
              <i>Icon</i>Play
            </button>
            <button className="movie__addButton">+</button>
            <button className="movie__likeButton">+</button>
            <button className="movie__dislikeButton">+</button>

            <button className="movie__muteButton">+</button>
          </div> */}
        <div className="movie__banner--fadeBottom" />
      </header>

      <div className="movie__body">
        <div className="movie__bodyLeft">
          <span className="movie__year">
            {movie?.release_date?.split("-")[0]}
          </span>
          <span className="movie__rating">R</span>
          <span className="movie__seasons">6 Seasons</span>
          <span className="movie__format">HD</span>
          <p className="movie__description">{movie?.overview}</p>
        </div>
        <div className="movie__bodyRight">
          <div className="movie__cast">
            <span>Cast:</span>{" "}
            {movie?.credits?.cast
              ?.filter((member, idx) => idx < 6)
              .map((member) => (
                <span className="movie__member">{member.name}</span>
              ))}
          </div>
          <div className="movie__genres">
            <span>Genres:</span>{" "}
            {movie?.genres?.map((g) => (
              <span className="movie__category">{g.name}</span>
            ))}
          </div>
          <div className="movie__definition">{movie.tagline}</div>
        </div>
      </div>
      <div className="movie__footer">
        {/* <header>
          <h2>Episodes</h2>
          <div className="season__select">
            <h3>Season 1</h3> <i>Icon</i>
          </div>
        </header>
        <div className="movie__episodes">
          <ul>
            <li>Episode</li>
            <li>Episode</li>
            <li>Episode</li>
            <li>Episode</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default MovieDetails;
