import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 20px;
	flex-wrap: wrap;
`;
const Card = styled.div`
	width: 100px;
	border: 1px solid black;
	background: red;
	color: white;
`;
const Search = styled.div`
	display: flex;
	flex-direction: column;
	width: 200px;
	margin: 20px;
`;

const SearchForm = ({ values, errors, touched, status }) => {
	const [ character, setCharacter ] = useState({ name: 'Search to display character info' });

	useEffect(
		() => {
			if (status) {
				setCharacter(status);
			}
		},
		[ status ]
	);

	return (
		<div>
			<div>
				<Form>
					<Search>
						<label>
							Search by ID:
							<Field type="text" name="name" />
						</label>
						<button>Submit!</button>
					</Search>
				</Form>
			</div>

			<Container>
				<Card>
					<h4>{character.name}</h4>
					<h5> {character.status} </h5>
					<h5> {character.species} </h5>
					<h5> {character.gender}</h5>
				</Card>
			</Container>
		</div>
	);
};

const FormikSearchForm = withFormik({
	mapPropsToValues({ name }) {
		return {
			name: name || 'ID'
		};
	},
	handleSubmit(values, { setStatus }) {
		console.log(values);
		axios
			.get(`https://rickandmortyapi.com/api/character/${values.name}`)
			.then((response) => {
				console.log(response);
				setStatus(response.data);
			})
			.catch((error) => {
				console.log('the data was not displayed', error);
			});
	}
})(SearchForm);

export default FormikSearchForm;
