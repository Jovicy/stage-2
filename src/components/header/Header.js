/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Logo from '../../assets/Logo.png';
import menuBtn from '../../assets/menu.svg';
import playBtn from '../../assets/Play.png';
import imdb from '../../assets/imdb.png';
import tomato from '../../assets/tomato.png';
import { Link } from 'react-router-dom';
import arrowBtn from '../../assets/arrow-right.png';
import './header.css'

const Header = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=2c32c5748ed591a2830d0caf372626aa&language=en-US')
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="h-screen">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          showArrows={false}
          onChange={handleSlideChange}
          className='carousel-wrapper'
        >
          {popularMovies.map((movie, index) => (
            <div
              key={movie.id}
              className="h-screen flex flex-col items-start px-16"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <nav className='flex justify-between items-center py-4 w-full'>
                <div>
                  <img src={Logo} alt="logo" />
                </div>
                <div className='w-1/3'>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="What do you want to watch?"
                      className="bg-transparent border border-white rounded-md pl-4 pr-10 py-2 w-full text-white placeholder-white focus:outline-none focus:border-blue-300"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='flex gap-7 items-center'>
                  <div>
                    <li className='list-none'><a className="text-white font-bold text-base" href="#">Sign In</a></li>
                  </div>
                  <div className='bg-rose-700 rounded-full p-2 cursor-pointer'>
                    <img src={menuBtn} alt="menu-btn" />
                  </div>
                </div>
              </nav>
              {/* Display movie details based on the current slide */}
              {currentSlide === index && (
                <div className="w-1/2 h-3/4 justify-center text-start flex flex-col gap-3">
                  <div>
                    <h1 className='text-white text-5xl font-bold tracking-widest leading-looose'>{movie ? movie.original_title : ''}</h1>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <div className="flex gap-3 items-center cursor-pointer">
                      <div>
                        <img src={imdb} alt="imdb-logo" />
                      </div>
                      <div>
                        <p className="text-white text-xs font-normal">{movie ? movie.vote_average : ''}</p>
                      </div>
                    </div>
                    <div className='flex gap-3 items-center cursor-pointer'>
                      <div>
                        <img src={tomato} alt="tomato" />
                      </div>
                      <div>
                        <p className="text-white text-xs font-normal">{movie ? movie.vote_count : ''}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className='text-white text-sm font-medium leading-loose'>{movie ? movie.overview : ''}</p>
                  </div>
                  <div>
                    <button className='flex justify-center gap-2 items-center bg-rose-700 rounded-md py-1.5 px-4 cursor-pointer'>
                      <div>
                        <img src={playBtn} alt="play" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white uppercase">Watch Trailer</p>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>
      <div className="py-12 px-16 flex-col flex justify-center gap-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl text-black font-bold">Featured Movie</h1>
          </div>
          <div className='flex items-center gap-1'>
            <div>
              <Link key={''} className='text-rose-700 text-lg font-normal'>See more</Link>
            </div>
            <div>
              <img src={arrowBtn} alt="icon" />
            </div>
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-between gap-2 w-full'>
          {popularMovies.map((movie, index) => (
            <div className='w-1/5'>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster-path" />
              <div className="flex flex-col gap-1 py-3">
                <div>
                  <h3 className='text-xs text-gray-400 font-normal'>{movie ? movie.original_language : ''}, {movie ? movie.release_date : ''}</h3>
                </div>
                <div>
                  <h3 className='text-lg text-gray-900 font-normal'>{movie ? movie.title : ''}</h3>
                </div>
                <div className='flex gap-3 items-center justify-between'>
                    <div className="flex gap-3 items-center cursor-pointer">
                      <div>
                        <img src={imdb} alt="imdb-logo" />
                      </div>
                      <div>
                        <p className="text-gray-900 text-xs font-normal">{movie ? movie.vote_average : ''}</p>
                      </div>
                    </div>
                    <div className='flex gap-3 items-center cursor-pointer'>
                      <div>
                        <img src={tomato} alt="tomato" />
                      </div>
                      <div>
                        <p className="text-gray-900 text-xs font-normal">{movie ? movie.vote_count : ''}</p>
                      </div>
                    </div>
                </div>
                <div>
                  <p className='text-gray-400 font-bold text-xs'>{movie ? movie.genre_ids : ''}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
