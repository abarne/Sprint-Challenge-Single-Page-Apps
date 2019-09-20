import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavItems = styled.div`
	margin-left: 10px;
	display: flex;
	justify-content: space-around;
`;

const Navigation = () => {
	return (
		<div>
			<NavItems>
				<Link to="/">Welcome</Link>
				<Link to="/characters">Characters</Link>
				<Link to="/search">Search</Link>
			</NavItems>
		</div>
	);
};

export default Navigation;
