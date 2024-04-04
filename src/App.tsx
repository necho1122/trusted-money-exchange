import "./App.css";
import moneyModel from "./assets/money-model.webp";
import moneyIcon from "./assets/Dollar money logo-sf.png";

function App() {
	return (
		<>
			<div className="container">
				<div className="title-and-currencies">
					<div className="title-section">
						<img src={moneyIcon} alt="money icon" />
						<h1>The Trusted Money Exchange</h1>
						<h3>Fast, Secure, and Reliable Currency Exchange</h3>
					</div>
					<div className="currencies-section">
						<div className="currency-card">
							<p>✔ United States Dollar (USD)</p>
						</div>
						<div className="currency-card">
							<p>✔ Euro (EUR)</p>
						</div>
						<div className="currency-card">
							<p>✔ Reais (BRL)</p>
						</div>
						<div className="currency-card">
							<p>✔ Bolivares (VES)</p>
						</div>
					</div>
					<div className="buttons-section">
						<button type="button">
							<img
								src="https://www.svgrepo.com/show/475692/whatsapp-color.svg"
								alt="whatsapp icon"
							/>
							WhatsApp
						</button>
						<button type="button">
							<img
								src="https://www.svgrepo.com/show/521097/calculator.svg"
								alt="calculator icon"
							/>{" "}
							Get a quote
						</button>
					</div>
				</div>
				<div className="images-section">
					<img src={moneyModel} alt="money model" />
					<div className="links-section">
						<a href="/">web page https://www.example.com</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
