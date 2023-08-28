import React from 'react';

const Card = (props) => {
	return (
		<div className='shadow-lg shadow-black h-max  w-full'>
			<img src={props.img} alt='movies poster' />
			<h2 className='text-center font-bold text-white'>{props.title}</h2>
			<p>{props.content}</p>
			<button>Submit</button>
		</div>
	);
};

export default Card;
