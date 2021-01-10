import axios from 'axios';
import { useState, useEffect } from 'react';
import CardMovie from './CardMovie'


export default function useApi() {
    const [data, setData] = useState({
        title: '',
        overview: '',
        release: '',
        vote: '',
        popularity: '',
        imgBg: '',
        imgPoster: '',
    })
    
    useEffect(() => {
        fechData(search)
    }, [])
    
    const fechData = async(movie) => {
            try {
                const apiKey = process.env.REACT_APP_URL
                const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie}`)
                const arrayData = res.data.results[0]
                const movieData = {
                    title: arrayData.original_title,
                    overview: arrayData.overview,
                    release: arrayData.release_date,
                    vote: arrayData.vote_average,
                    popularity: arrayData.popularity,
                    imgBg: 'https://image.tmdb.org/t/p/original' + arrayData.backdrop_path,
                    imgPoster: 'https://image.tmdb.org/t/p/original' + arrayData.poster_path,
                }
            await setData(movieData)     
            } catch (error) {
                alert('Title not found')
            }     

        //console.log(res.data.results[0])
    }
    const [search, setSearch] = useState('dirt')
    
    const handleSubmit = (event) => {
        fechData(search)
        console.log(search)
        event.preventDefault()
    };
    const handleChange = event => {
        setSearch(event.target.value)
    };
    return (
        <CardMovie 
            data={data} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
        />
    )
}
