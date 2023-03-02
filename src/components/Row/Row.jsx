import axios from "../../axios";
import React, { useState, useEffect } from "react";
import "./Row.css";
import { useHistory } from "react-router-dom";

const Row = ({ title, data, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  const base_url = "https://image.tmdb.org/t/p/original";

  const handleMovieDetails = (movieId) => {
    history.push(`/browse/${movieId}`);
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   const request = await axios.get(fetchUrl);
    //   setMovies(request.data.results);

    //   return request;
    // };

    // fetchData();
  }, []);

  console.log('Movies: ', movies)
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {data.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                onClick={() => handleMovieDetails(movie.id)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
    // <div className="questions">
    //   <div classNameName="questions__body">
    //     <section className="grid">
    //       <div class="box">
    //         <div class="box-content">
    //           <div class="user-header">
    //             <img
    //               class="user-avatar"
    //               src="https://picsum.photos/200"
    //               alt=""
    //             />
    //             <div class="user-info">
    //               <div class="user-username">$item.username</div>
    //               <div class="user-rating">
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //               </div>
    //             </div>
    //             <div class="user-sub-header">
    //               <i class="fa-solid fa-heart heart-icon"></i>
    //               <i class="fa-solid fa-ban block-icon"></i>
    //               <i class="far fa-paper-plane email-icon"></i>
    //             </div>
    //           </div>

    //           <div class="banner">
    //             <div class="tint"></div>
    //             <img
    //               src="https://picsum.photos/200"
    //               alt=""
    //               class="banner-image"
    //             />
    //           </div>
    //           <div class="body">
    //             <div class="body-top">
    //               <div class="body-top-bar">
    //                 <div class="social-info">
    //                   <i class="fa-solid fa-thumbs-up like-icon">
    //                     <span class="likes">33</span>
    //                   </i>
    //                   <i class="fa-regular fa-comment comment-icon">
    //                     <span class="comments">15</span>
    //                   </i>

    //                   <i class="fa-solid fa-share-nodes share-icon"></i>
    //                 </div>
    //                 <div class="date-posted">March 22, 2022</div>
    //               </div>
    //               <div class="title">$item.label</div>
    //               <p class="question">$item.question</p>
    //               <div class="read-more">
    //                 <p class="extended-question">$item.extended_question</p>

    //                 <span class="read-more-link">
    //                   <div class="read-more-button">
    //                     <i class="fas fa-arrow-alt-circle-down"></i>
    //                   </div>
    //                 </span>
    //               </div>
    //             </div>
    //             <div class="body-bottom">
    //               <div class="icons">
    //                 <span>
    //                   <i class="$item.info[0].icon"></i>$item.info[0].content
    //                 </span>

    //                 <span>
    //                   <i class="$item.info[1].icon"></i>$item.info[1].content
    //                 </span>

    //                 <span>
    //                   <i class="$item.info[2].icon"></i>$item.info[2].content
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //           <div class="footer">
    //             {/* <div class="posted-date">
    //               <i class="far fa-calendar-alt"></i>2 days ago
    //             </div> */}
    //             <div class="cost">Claim</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="box">
    //         <div class="box-content">
    //           <div class="user-header">
    //             <img
    //               class="user-avatar"
    //               src="https://picsum.photos/200"
    //               alt=""
    //             />
    //             <div class="user-info">
    //               <div class="user-username">$item.username</div>
    //               <div class="user-rating">
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //               </div>
    //             </div>
    //             <div class="user-sub-header">
    //               <i class="fa-solid fa-heart heart-icon"></i>
    //               <i class="fa-solid fa-ban block-icon"></i>
    //               <i class="far fa-paper-plane email-icon"></i>
    //             </div>
    //           </div>

    //           <div class="banner">
    //             <div class="tint"></div>
    //             <img
    //               src="https://picsum.photos/200"
    //               alt=""
    //               class="banner-image"
    //             />
    //           </div>
    //           <div class="body">
    //             <div class="body-top">
    //               <div class="body-top-bar">
    //                 <div class="social-info">
    //                   <i class="fa-solid fa-thumbs-up like-icon">
    //                     <span class="likes">33</span>
    //                   </i>
    //                   <i class="fa-regular fa-comment comment-icon">
    //                     <span class="comments">15</span>
    //                   </i>

    //                   <i class="fa-solid fa-share-nodes share-icon"></i>
    //                 </div>
    //                 <div class="date-posted">March 22, 2022</div>
    //               </div>
    //               <div class="title">$item.label</div>
    //               <p class="question">$item.question</p>
    //               <div class="read-more">
    //                 <p class="extended-question">$item.extended_question</p>

    //                 <span class="read-more-link">
    //                   <div class="read-more-button">
    //                     <i class="fas fa-arrow-alt-circle-down"></i>
    //                   </div>
    //                 </span>
    //               </div>
    //             </div>
    //             <div class="body-bottom">
    //               <div class="icons">
    //                 <span>
    //                   <i class="$item.info[0].icon"></i>$item.info[0].content
    //                 </span>

    //                 <span>
    //                   <i class="$item.info[1].icon"></i>$item.info[1].content
    //                 </span>

    //                 <span>
    //                   <i class="$item.info[2].icon"></i>$item.info[2].content
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //           <div class="footer">
    //             {/* <div class="posted-date">
    //               <i class="far fa-calendar-alt"></i>2 days ago
    //             </div> */}
    //             <div class="cost">Claim</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="box">
    //         <div class="box-content">
    //           <div class="user-header">
    //             <img
    //               class="user-avatar"
    //               src="https://picsum.photos/200"
    //               alt=""
    //             />
    //             <div class="user-info">
    //               <div class="user-username">$item.username</div>
    //               <div class="user-rating">
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //               </div>
    //             </div>
    //             <div class="user-sub-header">
    //               <i class="fa-solid fa-heart heart-icon"></i>
    //               <i class="fa-solid fa-ban block-icon"></i>
    //               <i class="far fa-paper-plane email-icon"></i>
    //             </div>
    //           </div>

    //           <div class="banner">
    //             <div class="tint"></div>
    //             <img
    //               src="https://picsum.photos/200"
    //               alt=""
    //               class="banner-image"
    //             />
    //           </div>
    //           <div class="body">
    //             <div class="body-top">
    //               <div class="body-top-bar">
    //                 <div class="social-info">
    //                   <i class="fa-solid fa-thumbs-up like-icon">
    //                     <span class="likes">33</span>
    //                   </i>
    //                   <i class="fa-regular fa-comment comment-icon">
    //                     <span class="comments">15</span>
    //                   </i>

    //                   <i class="fa-solid fa-share-nodes share-icon"></i>
    //                 </div>
    //                 <div class="date-posted">March 22, 2022</div>
    //               </div>
    //               <div class="title">$item.label</div>
    //               <p class="question">$item.question</p>
    //               <div class="read-more">
    //                 <p class="extended-question">$item.extended_question</p>

    //                 <span class="read-more-link">
    //                   <div class="read-more-button">
    //                     <i class="fas fa-arrow-alt-circle-down"></i>
    //                   </div>
    //                 </span>
    //               </div>
    //             </div>
    //             <div class="body-bottom">
    //               <div class="icons">
    //                 <span>
    //                   <i class="$item.info[0].icon"></i>$item.info[0].content
    //                 </span>

    //                 <span>
    //                   <i class="$item.info[1].icon"></i>$item.info[1].content
    //                 </span>

    //                 <span>
    //                   <i class="$item.info[2].icon"></i>$item.info[2].content
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //           <div class="footer">
    //             {/* <div class="posted-date">
    //               <i class="far fa-calendar-alt"></i>2 days ago
    //             </div> */}
    //             <div class="cost">Claim</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="box">
    //         <div class="box-content">
    //           <div class="user-header">
    //             <img
    //               class="user-avatar"
    //               src="https://picsum.photos/200"
    //               alt=""
    //             />
    //             <div class="user-info">
    //               <div class="user-username">$item.username</div>
    //               <div class="user-rating">
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //               </div>
    //             </div>
    //             <div class="user-sub-header">
    //               <i class="fa-solid fa-heart heart-icon"></i>
    //               <i class="fa-solid fa-ban block-icon"></i>
    //               <i class="far fa-paper-plane email-icon"></i>
    //             </div>
    //           </div>

    //           <div class="banner">
    //             <div class="tint"></div>
    //             <img
    //               src="https://picsum.photos/200"
    //               alt=""
    //               class="banner-image"
    //             />
    //           </div>
    //           <div class="body">
    //             <div class="body-top">
    //               <div class="body-top-bar">
    //                 <div class="social-info">
    //                   <i class="fa-solid fa-thumbs-up like-icon">
    //                     <span class="likes">33</span>
    //                   </i>
    //                   <i class="fa-regular fa-comment comment-icon">
    //                     <span class="comments">15</span>
    //                   </i>

    //                   <i class="fa-solid fa-share-nodes share-icon"></i>
    //                 </div>
    //                 <div class="date-posted">March 22, 2022</div>
    //               </div>
    //               <div class="title">$item.label</div>
    //               <p class="question">$item.question</p>
    //               <div class="read-more">
    //                 <p class="extended-question">$item.extended_question</p>

    //                 <span class="read-more-link">
    //                   <div class="read-more-button">
    //                     <i class="fas fa-arrow-alt-circle-down"></i>
    //                   </div>
    //                 </span>
    //               </div>
    //             </div>
    //             <div class="body-bottom">
    //               <div class="icons">
    //                 <span>
    //                   <i class="$item.info[0].icon"></i>$item.info[0].content
    //                 </span>

    //                 <span>
    //                   <i class="$item.info[1].icon"></i>$item.info[1].content
    //                 </span>

    //                 <span>
    //                   <i class="$item.info[2].icon"></i>$item.info[2].content
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //           <div class="footer">
    //             {/* <div class="posted-date">
    //               <i class="far fa-calendar-alt"></i>2 days ago
    //             </div> */}
    //             <div class="cost">Claim</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="box">
    //         <div class="box-content">
    //           <div class="user-header">
    //             <img
    //               class="user-avatar"
    //               src="https://picsum.photos/200"
    //               alt=""
    //             />
    //             <div class="user-info">
    //               <div class="user-username">$item.username</div>
    //               <div class="user-rating">
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //               </div>
    //             </div>
    //             <div class="user-sub-header">
    //               <i class="fa-solid fa-heart heart-icon"></i>
    //               <i class="fa-solid fa-ban block-icon"></i>
    //               <i class="far fa-paper-plane email-icon"></i>
    //             </div>
    //           </div>

    //           <div class="banner">
    //             <div class="tint"></div>
    //             <img
    //               src="https://picsum.photos/200"
    //               alt=""
    //               class="banner-image"
    //             />
    //           </div>
    //           <div class="body">
    //             <div class="body-top">
    //               <div class="body-top-bar">
    //                 <div class="social-info">
    //                   <i class="fa-solid fa-thumbs-up like-icon">
    //                     <span class="likes">33</span>
    //                   </i>
    //                   <i class="fa-regular fa-comment comment-icon">
    //                     <span class="comments">15</span>
    //                   </i>

    //                   <i class="fa-solid fa-share-nodes share-icon"></i>
    //                 </div>
    //                 <div class="date-posted">March 22, 2022</div>
    //               </div>
    //               <div class="title">$item.label</div>
    //               <p class="question">$item.question</p>
    //               <div class="read-more">
    //                 <p class="extended-question">$item.extended_question</p>

    //                 <span class="read-more-link">
    //                   <div class="read-more-button">
    //                     <i class="fas fa-arrow-alt-circle-down"></i>
    //                   </div>
    //                 </span>
    //               </div>
    //             </div>
    //             <div class="body-bottom">
    //               <div class="icons">
    //                 <span>
    //                   <i class="$item.info[0].icon"></i>$item.info[0].content
    //                 </span>

    //                 <span>
    //                   <i class="$item.info[1].icon"></i>$item.info[1].content
    //                 </span>

    //                 <span>
    //                   <i class="$item.info[2].icon"></i>$item.info[2].content
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //           <div class="footer">
    //             {/* <div class="posted-date">
    //               <i class="far fa-calendar-alt"></i>2 days ago
    //             </div> */}
    //             <div class="cost">Claim</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="box">
    //         <div class="box-content">
    //           <div class="user-header">
    //             <img
    //               class="user-avatar"
    //               src="https://picsum.photos/200"
    //               alt=""
    //             />
    //             <div class="user-info">
    //               <div class="user-username">$item.username</div>
    //               <div class="user-rating">
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //               </div>
    //             </div>
    //             <div class="user-sub-header">
    //               <i class="fa-solid fa-heart heart-icon"></i>
    //               <i class="fa-solid fa-ban block-icon"></i>
    //               <i class="far fa-paper-plane email-icon"></i>
    //             </div>
    //           </div>

    //           <div class="banner">
    //             <div class="tint"></div>
    //             <img
    //               src="https://picsum.photos/200"
    //               alt=""
    //               class="banner-image"
    //             />
    //           </div>
    //           <div class="body">
    //             <div class="body-top">
    //               <div class="body-top-bar">
    //                 <div class="social-info">
    //                   <i class="fa-solid fa-thumbs-up like-icon">
    //                     <span class="likes">33</span>
    //                   </i>
    //                   <i class="fa-regular fa-comment comment-icon">
    //                     <span class="comments">15</span>
    //                   </i>

    //                   <i class="fa-solid fa-share-nodes share-icon"></i>
    //                 </div>
    //                 <div class="date-posted">March 22, 2022</div>
    //               </div>
    //               <div class="title">$item.label</div>
    //               <p class="question">$item.question</p>
    //               <div class="read-more">
    //                 <p class="extended-question">$item.extended_question</p>

    //                 <span class="read-more-link">
    //                   <div class="read-more-button">
    //                     <i class="fas fa-arrow-alt-circle-down"></i>
    //                   </div>
    //                 </span>
    //               </div>
    //             </div>
    //             <div class="body-bottom">
    //               <div class="icons">
    //                 <span>
    //                   <i class="$item.info[0].icon"></i>$item.info[0].content
    //                 </span>

    //                 <span>
    //                   <i class="$item.info[1].icon"></i>$item.info[1].content
    //                 </span>

    //                 <span>
    //                   <i class="$item.info[2].icon"></i>$item.info[2].content
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //           <div class="footer">
    //             {/* <div class="posted-date">
    //               <i class="far fa-calendar-alt"></i>2 days ago
    //             </div> */}
    //             <div class="cost">Claim</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="box">
    //         <div class="box-content">
    //           <div class="user-header">
    //             <img
    //               class="user-avatar"
    //               src="https://picsum.photos/200"
    //               alt=""
    //             />
    //             <div class="user-info">
    //               <div class="user-username">$item.username</div>
    //               <div class="user-rating">
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //                 <i class="fa-solid fa-star"></i>
    //               </div>
    //             </div>
    //             <div class="user-sub-header">
    //               <i class="fa-solid fa-heart heart-icon"></i>
    //               <i class="fa-solid fa-ban block-icon"></i>
    //               <i class="far fa-paper-plane email-icon"></i>
    //             </div>
    //           </div>

    //           <div class="banner">
    //             <div class="tint"></div>
    //             <img
    //               src="https://picsum.photos/200"
    //               alt=""
    //               class="banner-image"
    //             />
    //           </div>
    //           <div class="body">
    //             <div class="body-top">
    //               <div class="body-top-bar">
    //                 <div class="social-info">
    //                   <i class="fa-solid fa-thumbs-up like-icon">
    //                     <span class="likes">33</span>
    //                   </i>
    //                   <i class="fa-regular fa-comment comment-icon">
    //                     <span class="comments">15</span>
    //                   </i>

    //                   <i class="fa-solid fa-share-nodes share-icon"></i>
    //                 </div>
    //                 <div class="date-posted">March 22, 2022</div>
    //               </div>
    //               <div class="title">$item.label</div>
    //               <p class="question">$item.question</p>
    //               <div class="read-more">
    //                 <p class="extended-question">$item.extended_question</p>

    //                 <span class="read-more-link">
    //                   <div class="read-more-button">
    //                     <i class="fas fa-arrow-alt-circle-down"></i>
    //                   </div>
    //                 </span>
    //               </div>
    //             </div>
    //             <div class="body-bottom">
    //               <div class="icons">
    //                 <span>
    //                   <i class="$item.info[0].icon"></i>$item.info[0].content
    //                 </span>

    //                 <span>
    //                   <i class="$item.info[1].icon"></i>$item.info[1].content
    //                 </span>

    //                 <span>
    //                   <i class="$item.info[2].icon"></i>$item.info[2].content
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //           <div class="footer">
    //             {/* <div class="posted-date">
    //               <i class="far fa-calendar-alt"></i>2 days ago
    //             </div> */}
    //             <div class="cost">Claim</div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </div>
  );
};

export default Row;
