import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import requests from "../../Requests";
import Row from "../../components/Row/Row";

import axios from "axios";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [netflixOriginals, setNetflixOriginals] = useState(null);
  const [trending, setTrending] = useState(null);
  const [action, setAction] = useState(null);
  const [comedy, setComedy] = useState(null);
  const [horror, setHorror] = useState(null);
  const [romance, setRomance] = useState(null);
  const [documentaries, setDocumentaries] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // const request = await axios.get(fetchUrl);
      // const netflixOriginals = await axios.get(requests.fetchNetflixOriginals);
      // const trending = await axios.get(requests.fetchTrending);
      // const action = await axios.get(requests.fetchActionMovies);
      // const comedy = await axios.get(requests.fetchComedyMovies);
      // const horror = await axios.get(requests.fetchHorrorMovies);
      // const romance = await axios.get(requests.fetchRomanceMovies);
      // const getDocumentaries = async () => {
      //   const documentaries = await axios.get(requests.fetchDocumentaries);
      //   return documentaries;
      // };
      // const getData = async () => {
      //   return {
      //      axios.get(requests.fetchNetflixOriginals),
      //      axios.get(requests.fetchTrending),
      //      axios.get(requests.fetchActionMovies),
      //     axios.get(requests.fetchComedyMovies),
      //     axios.get(requests.fetchHorrorMovies),
      //     axios.get(requests.fetchRomanceMovies),
      //     //  documentaries:
      //   };
      // };

      // const data = await getData();
      // console.log('Data: ', data);
      // const arr = [
      //   {
      //     netflixOriginals: await axios.get(requests.fetchNetflixOriginals),
      //     trending: await axios.get(requests.fetchTrending),
      //     action: await axios.get(requests.fetchActionMovies),
      //     comedy: await axios.get(requests.fetchComedyMovies),
      //     horror: await axios.get(requests.fetchHorrorMovies),
      //     romance: await axios.get(requests.fetchRomanceMovies),
      //     //  documentaries:
      //   }
      // ];
      try {
        const res = await Promise.all([
          axios.get(requests.fetchNetflixOriginals),
          axios.get(requests.fetchTrending),
          axios.get(requests.fetchActionMovies),
          axios.get(requests.fetchComedyMovies),
          axios.get(requests.fetchHorrorMovies),
          axios.get(requests.fetchRomanceMovies),
        ]);

        const data = res.map((res) => res.data.results);
        setNetflixOriginals(data[0]);
        setTrending(data[1]);
        setAction(data[2]);
        setComedy(data[3]);
        setHorror(data[4]);
        setRomance(data[5]);
        // setDocumentaries(data[6]);
        setLoading(false);
        console.log("Data: ", data);
      } catch (error) {
        console.log(error);
      }

      // console.log("Data: ", netflixOriginals);

      // setNetflixOriginals(netflixOriginals);
      // setTrending(trending);
      // setAction(action);
      // setComedy(comedy);
      // setHorror(horror);
      // setRomance(romance);
      // setDocumentaries(documentaries);

   
    };
    fetchData();
  }, []);

  console.log('Trending: ', trending)
  return (
    <div className="home">
      <Navbar />

      <Banner />

      {loading ? <div style={{background: "black", display: "flex", justifyContent: "center", alignItems: "center", height: "80vh"}}><Loader /></div> : (
        <>
          <Row
            title="NETFLIX ORIGINAL"
            data={netflixOriginals}
            // fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
          />
          <Row title="Trending Now" data={trending} />
          {/* <Row title="Top Rated" fetchUrl={requests.fetchTopRated} /> */}
          <Row title="Action Movies" data={action} />
          <Row title="Comedy Movies" data={comedy} />
          <Row title="Horror Movies" data={horror} />
          <Row title="Romance Movies" data={romance} />
          {/* <Row title="Documentaries" data={documentaries} /> */}
        </>
      )}
    </div>
  );
};

export default Home;
