import React from 'react';
import Home from './Home';
import About from './Quote';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
	return (
		<div className='bg-black text-white'>
			<Router>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/quote' element={<About />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
