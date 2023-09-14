import React, { useEffect } from 'react'

const Home = () => {

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=2c32c5748ed591a2830d0caf372626aa&language=en-US")
        .then(res => res.json())
        .then(data  => console.log(data))
    }, [])

  return (
    <div>
        home page is rendered
    </div>
  )
}

export default Home