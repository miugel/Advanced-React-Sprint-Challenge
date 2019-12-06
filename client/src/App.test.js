import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DarkModeButton from './components/DarkModeButton';
import Table from './components/Table';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
