import "./App.css";
import alienScoutsLogo from "./images/alien-scouts-logo.png";

function App() {
	return (
		<div className="App">
			<div className="alien-scouts-logo-container">
				<img
					src={alienScoutsLogo}
					className="alien-scouts-logo"
					alt="Alien Scouts Logo"
				/>
			</div>
		</div>
	);
}

export default App;
