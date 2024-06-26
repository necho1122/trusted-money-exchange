import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Quote from './Quote';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<Router>
				<Routes>
					<Route
						path='/'
						element={<App />}
					/>
					<Route
						path='/quote'
						element={<Quote />}
					/>
				</Routes>
			</Router>
		</React.StrictMode>
	);
}
