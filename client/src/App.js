import React from 'react';
import axios from 'axios';
import Table from './Table';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			players: []
		}
	}

	componentDidMount() {
		axios.get('http://localhost:5000/api/players')
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			})
	}

	render() {
		return (
			<div className='app'>
				<h1>Top Google Searches</h1>
				<h2>2019 Women's World Cup</h2>
				<Table/>
			</div>
		)
	}
}

export default App;
