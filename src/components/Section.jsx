import React, { useState, useEffect } from 'react';

const Section = () => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		const fetchMovies = async () => {
			const url =
				'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key':
						'2f9c6ced06msh2567ab885667a73p1d6185jsn1eaa2589bc73',
					'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
				},
			};

			try {
				const response = await fetch(url, options);
				const result = await response.json();
				setMovies(result.titles);
			} catch (error) {
				console.error(error);
			}
		};
		fetchMovies();
	}, []);
	console.log(movies);
	return (
		<div className='col-span-8 grid grid-cols-3'>
			{movies.map((movie) => {
				return (
					<div>
						<img
							src={movie.jawSummary.backgroundImage.url}
							alt=''
						/>
						<h3>{movie.jawSummary.title}</h3>
					</div>
				);
			})}
		</div>
	);
};

export default Section;
