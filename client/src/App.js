import React from 'react';
import axios from 'axios';
import Table from './components/Table';
import DarkModeButton from './components/DarkModeButton';
import './index.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			players: []
		}
	}

	componentDidMount() {
		axios.get("http://localhost:5000/api/players")
		 	.then(response => {
		   		this.setState({
					players: response.data
				});
		 	})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		return (
			<div className='app'>
				<DarkModeButton/>
				<h1>Top Google Searches</h1>
				<h2>2019 Women's World Cup</h2>
				<Table state={this.state}/>
			</div>
		)
	}
}

export default App;
