import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [ character, setCharacter ] = useState([]);

	const Container = styled.div`
		display: flex;
		justify-content: space-between;
		margin: 20px;
		flex-wrap: wrap;
	`;
	const Card = styled.div`
		width: 100px;
		border: 1px solid black;
	`;

	useEffect(
		() => {
			// TODO: Add API Request here - must run in `useEffect`
			//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
			axios
				.get(`https://rickandmortyapi.com/api/character/`)
				.then((response) => {
					console.log(response.data.results);
					setCharacter(response.data.results);
				})
				.catch((error) => {
					console.log('the data was not displayed', error);
				});
		},
		[ character ]
	);

	return (
		<Container>
			{character.map((item) => (
				<Card key={item.id}>
					<h4>{item.name}</h4>
					<h5>{item.status}</h5>
					<h5>{item.species}</h5>
					<h5>{item.gender}</h5>
				</Card>
			))}
		</Container>
	);
}
