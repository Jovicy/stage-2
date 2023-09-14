// import React, { useEffect, useState } from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import { Link } from 'react-router-dom';
// import playBtn from '../../assets/Play.png'

// const Home = () => {
//   const [popularMovies, setPopularMovies] = useState([]);

//   useEffect(() => {
//     fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=2c32c5748ed591a2830d0caf372626aa&language=en-US')
//       .then((res) => res.json())
//       .then((data) => setPopularMovies(data.results));
//   }, []);

//   return (
//     <div className='w-full'>
//     <Carousel
//         showThumbs={false}
//         autoPlay={true}
//         transitionTime={3}
//         infiniteLoop={true}
//         showStatus={false}
//     >
//         {popularMovies.map((movie) => (
//           <Link key={movie.id}>
//             <div
                
//             >
//                 <div className="">
//                     <div>
//                         <h1>{movie ? movie.original_title: ""}</h1>
//                     </div>
//                     <div>

//                     </div>
//                     <div>
//                         <p></p>
//                     </div>
//                     <button className=''>
//                         <div>
//                             <img src={playBtn} alt="play" />
//                         </div>
//                         <div>
//                             <p>Watch Trailer</p>
//                         </div>
//                     </button>
//                 </div>
//             </div>
//           </Link>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Home;
