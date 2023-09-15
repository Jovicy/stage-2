/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from "react";
import Logo from '../../assets/logo2.png';
import homeBtn from '../../assets/Home.png'
import movieBtn from '../../assets/Movie Projector.png'
import tvBtn from '../../assets/TV Show.png'
import upBtn from '../../assets/Calendar.png'
import logoutBtn from '../../assets/Logout.png'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"

import list from '../../assets/List.png';
import tickets from '../../assets/Two Tickets.png';
import ad from '../../assets/Rectangle 37.png';
import star from '../../assets/Star.png';

const movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2c32c5748ed591a2830d0caf372626aa&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

  return (
    <div className="flex h-screen w-full">
        <div className="flex flex-col gap-10 w-3/12 h-full border-black border-2 p-4 rounded-r-lg bg-white z-10">
            <div>
                <img src={Logo} alt="logo" />
            </div>
            <div className="flex flex-col gap-10 p-2">
                <div className="flex gap-4 items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <div>
                            <img src={homeBtn} alt="link icon" />
                        </div>
                        <div>
                            <p className="text-gray-600 text-xl font-semibold cursor-pointer">Home</p>
                        </div>
                    </Link>
                </div>
                <div className="flex gap-4 items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <div>
                            <img src={movieBtn} alt="link icon" />
                        </div>
                        <div>
                            <p className="text-gray-600 text-xl font-semibold cursor-pointer">Movies</p>
                        </div>
                    </Link>
                </div>
                <div className="flex gap-4 items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <div>
                            <img src={tvBtn} alt="link icon" />
                        </div>
                        <div>
                            <p className="text-gray-600 text-xl font-semibold cursor-pointer">TV Series</p>
                        </div>
                    </Link>
                </div>
                
                <div className="flex gap-4 items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <div>
                            <img src={upBtn} alt="link icon" />
                        </div>
                        <div>
                            <p className="text-gray-600 text-xl font-semibold cursor-pointer">Upcoming</p>
                        </div>
                    </Link>
                </div>
                <div className="border-rose-300 border-2 rounded-lg p-2 flex flex-col gap-2 cursor-pointer">
                    <div>
                        <p className="text-sm text-gray-600 font-semibold">Play movie quizzes and earn free tickets</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-medium">50k people are playing now</p>
                    </div>
                    <div>
                        <button className="bg-rose-100 rounded-full p-3 text-xs text-rose-500 font-medium">Start playing</button>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div>
                        <img src={logoutBtn} alt="link icon" />
                    </div>
                    <div>
                        <p className="text-gray-600 text-xl font-semibold cursor-pointer">Log Out</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-9/12 p-5">
            {currentMovieDetail ? (
                <div className="flex flex-col w-full h-full">
                <div className="rounded-lg w-full h-3/4 object-cover">
                    <img
                    src={`https://image.tmdb.org/t/p/original${currentMovieDetail.backdrop_path}`}
                    alt="poster-img"
                    className="rounded-lg h-full w-full"
                    />
                </div>
                <div className="p-4 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <div data-testid="movie-title">
                        <p className="font-bold">{currentMovieDetail.title}</p>
                        </div>
                        <ul className="flex gap-3">
                        <div data-testid="movie-release-date">
                            <p className="font-bold list-disc">
                            {currentMovieDetail.release_date}
                            </p>
                        </div>
                        <div data-testid="movie-runtime">
                            <p className="font-bold list-disc">
                            {currentMovieDetail.runtime + " mins"}
                            </p>
                        </div>
                        </ul>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="flex items-center gap-1">
                        <div>
                            <img src={star} alt="star" />
                        </div>
                        <div>
                            <p className="text-gray-200">
                            {currentMovieDetail.vote_average}
                            </p>
                        </div>
                        </div>
                        <div className="flex items-center gap-1">
                        <p>| 350k</p>
                        </div>
                    </div>
                    </div>
                    <div className="w-full flex gap-4">
                    <div className="w-3/4 flex flex-col gap-5">
                        <div>
                        <div data-testid="movie-overview">
                            <p className="text-base font-normal text-gray-700 leading-relaxed">
                            {currentMovieDetail.overview}
                            </p>
                        </div>
                        </div>
                        <div className="flex flex-col gap-3">
                        <div>
                            <p className="text-base font-normal text-gray-700 leading-relaxed">
                            Director :{" "}
                            <span className="text-rose-700">
                                {currentMovieDetail.director}
                            </span>
                            </p>
                        </div>
                        <div>
                            <p className="text-base font-normal text-gray-700 leading-relaxed">
                            Writers :{" "}
                            <span className="text-rose-700">
                                {currentMovieDetail.writers}
                            </span>
                            </p>
                        </div>
                        <div>
                            <p className="text-base font-normal text-gray-700 leading-relaxed">
                            Stars :{" "}
                            <span className="text-rose-700">
                                {currentMovieDetail.stars}
                            </span>
                            </p>
                        </div>
                        </div>
                        <div className="flex items-center w-full">
                        <div className="w-2/5">
                            <button className="bg-rose-700 rounded-md py-1.5 px-4 cursor-pointer w-full">
                            <p className="text-sm font-bold text-white uppercase">
                                Top Rated Movie #65
                            </p>
                            </button>
                        </div>
                        <div className="w-3/5">
                            <select className="border border-black rounded-md py-1.5 px-4 w-full">
                            <option value="Awards 9 Nomination" className="p-2">
                                Awards 9 Nomination
                            </option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div className="w1/4 flex flex-col gap-2">
                        <div className="w-full">
                        <Link to={`/movie/${movie.id}`}>
                            <button className="w-full flex justify-center gap-2 items-center bg-rose-700 rounded-md py-1.5 px-4 cursor-pointer">
                            <div>
                                <img src={tickets} alt="btn" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white capitalize">
                                See Showtimes
                                </p>
                            </div>
                            </button>
                        </Link>
                        </div>
                        <div className="w-full">
                        <Link to={`/movie/${movie.id}`}>
                            <button className="w-full flex justify-center gap-2 items-center border-rose-700 border bg-rose-200 rounded-md py-1.5 px-4 cursor-pointer">
                            <div>
                                <img src={list} alt="btn" />
                            </div>
                            <div>
                                <p className="text-base font-medium text-gray-700 capitalize">
                                More Watch Options
                                </p>
                            </div>
                            </button>
                        </Link>
                        </div>
                        <div>
                        <img src={ad} alt="ads" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    </div>
  )
}

export default movie