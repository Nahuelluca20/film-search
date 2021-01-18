/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../Styles/Home.css'
import movieImg from '../Images/movie.svg'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="title-div">
        <h1>Find your favorite Movie</h1>
        <Link to={`${process.env.PUBLIC_URL}/search`}>
        <button>
          Search
        </button>
        </Link>
      </div>
      <div>
        <img src={movieImg} width="300px" className="home-img" alt="home" />
      </div>
    </div>
  )
}
