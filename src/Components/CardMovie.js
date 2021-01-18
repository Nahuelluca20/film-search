import React from 'react'

export default function Card({ data, handleChange, handleSubmit }) {
        return (
        <section className="principal" style={{backgroundImage: `url(${data.imgBg})`}}>
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search Movie Title..."
                    onChange={handleChange}
                    required
                />
                <button >Search</button>
            </form>
        </div>
            <div className="children">
                <img height="500px" src={data.imgPoster} alt={data.title} />
                <div className="info-div">
                    <div>
                        <h1>{data.title}</h1>
                        <p>{data.overview}</p>
                        <h3>
                            Original release: <span>{data.release}</span>
                        </h3>
                        <h3>
                            Vote: <span>{data.vote}/10</span>
                        </h3>
                        <h3>
                            Popularity: <span>{data.popularity}</span>
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
