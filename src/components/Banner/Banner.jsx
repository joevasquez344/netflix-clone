import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../../axios";
import requests from "../../Requests";
import Loader from "../Loader/Loader";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  console.log("Movie: ", movie);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      setLoading(false);

      return request;
    };

    fetchData();
  }, []);

  return (
    <>
      {" "}
      {loading ? (
        <div style={{ background: "black", display: "flex", justifyContent: "center", alignItems: "center", height: "448px" }}>
          <Loader />
        </div>
      ) : (
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banner__contents">
            <h1 className="banner__title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">
              {truncate(movie?.overview, 150)}
            </h1>
          </div>
          <div className="banner--fadeBottom" />
        </header>
      )}
    </>
  );
};

export default Banner;
