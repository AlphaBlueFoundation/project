import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';

let url =
	'https://opentdb.com/api.php?amount=10&category=24&difficulty=easy&encode=url3986';
const About = () => {
	const [questions, setQuestions] = useState([]);
	useEffect(() => {
		const fetchQuote = async () => {
			let response = await fetch(url);
			let data = await response.json();
			console.log(data.results);
			setQuestions(data.results);
		};
		fetchQuote();
	}, []);
	return (
		<div>
			<Nav />
			{/* <input type="text"  /> */}
			{questions?.map((question) => {
				return (
					<div className=' h-max shadow-sm shadow-white mb-[20px]'>
						<h3>{decodeURIComponent(question.question)}</h3>
						<div className=' gap-[20px] '>
							<input type='radio' id='a' />{' '}
							<label htmlFor='a'>
								{decodeURIComponent(question.correct_answer)}
								{decodeURIComponent(question.incorrect_answers)}
							</label>
							<input type='radio' id='a' />{' '}
							<label htmlFor='a'>
								{decodeURIComponent(question.incorrect_answers)}
							</label>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default About;
