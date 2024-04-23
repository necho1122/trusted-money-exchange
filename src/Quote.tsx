import React, { useState, useEffect } from 'react';
import './Quote.css';
import axios from 'axios';

interface RateData {
	[key: string]: number;
}

function Quote() {
	const [rates, setRates] = useState<RateData>({});
	const [fromCurrency, setFromCurrency] = useState<string>('usd');
	const [toCurrency, setToCurrency] = useState<string>('usd');
	const [amount, setAmount] = useState<number | ''>('');
	const [result, setResult] = useState<number | ''>('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get<RateData[]>(
					'http://localhost:3000/data'
				);
				const rateData = response.data[0];
				setRates(rateData);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const fromRate = rates[fromCurrency];
		const toRate = rates[toCurrency];
		const convertedAmount = ((amount as number) / fromRate) * toRate;
		setResult(Number(convertedAmount.toFixed(4)));
	};

	return (
		<div className='quote-container'>
			<a
				id='back-to-home'
				href='/'
			>
				<img
					src='https://cdn-icons-png.flaticon.com/512/20/20176.png'
					alt='back to home icon'
				/>
				Home
			</a>
			<div className='quote'>
				<h2 className='quote-title'>Currency Exchange</h2>
				<form
					className='quote-form'
					onSubmit={handleFormSubmit}
				>
					<div className='input-group'>
						<label htmlFor='from'>From:</label>
						<select
							name='from'
							id='from'
							value={fromCurrency}
							onChange={(e) => setFromCurrency(e.target.value)}
						>
							{Object.keys(rates).map((currency) => (
								<option
									key={currency}
									value={currency}
								>
									{currency.toUpperCase()}
								</option>
							))}
						</select>
					</div>
					<div className='input-group'>
						<label htmlFor='to'>To:</label>
						<select
							name='to'
							id='to'
							value={toCurrency}
							onChange={(e) => setToCurrency(e.target.value)}
						>
							{Object.keys(rates).map((currency) => (
								<option
									key={currency}
									value={currency}
								>
									{currency.toUpperCase()}
								</option>
							))}
						</select>
					</div>
					<div className='input-group'>
						<label htmlFor='amount'>Amount:</label>
						<input
							type='number'
							name='amount'
							id='amount'
							value={amount}
							onChange={(e) => setAmount(e.target.valueAsNumber)}
							className='amount-input'
						/>
					</div>
					<div className='input-group'>
						<label htmlFor='result'>total in {toCurrency.toUpperCase()}:</label>
						<input
							type='text'
							name='result'
							id='result'
							value={result}
							readOnly
							className='result-input'
						/>
					</div>
					<button
						type='submit'
						className='quote-button'
					>
						Get Quote
					</button>
					<div className='buttons-section'>
						<a
							href='https://wa.me/555481156815'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								src='https://www.svgrepo.com/show/475692/whatsapp-color.svg'
								alt='whatsapp icon'
							/>
							Let's Exchange
						</a>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Quote;
