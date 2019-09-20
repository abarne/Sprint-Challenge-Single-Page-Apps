import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header.js';
import Navigation from './components/Navigation';
import WelcomePage from './components/WelcomePage.js';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';

export default function App() {
	return (
		<main>
			<div>
				<Header />
				<Navigation />
				<Route exact path="/" component={WelcomePage} />
				<Route path="/characters" component={CharacterList} />
				<Route path="/search" component={SearchForm} />
			</div>
		</main>
	);
}
