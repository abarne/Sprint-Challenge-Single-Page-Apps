import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<div>
			<div>
				<Link to="/">Welcome</Link>
				<Link to="/characters">Characters</Link>
				<Link to="/search">Search</Link>
			</div>
		</div>
	);
};

export default Navigation;
