import "./App.css";
import alienScoutsLogo from "./images/alien-scouts-logo.png";
import Button from "./components/Button";
import Screen from "./components/Screen";

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
			<div className="calculator-container">
				<Screen />
				<div className="row">
					<Button>1</Button>
					<Button>2</Button>
					<Button>3</Button>
					<Button>+</Button>
				</div>
				<div className="row">
					<Button>4</Button>
					<Button>5</Button>
					<Button>6</Button>
					<Button>-</Button>
				</div>
				<div className="row">
					<Button>7</Button>
					<Button>8</Button>
					<Button>9</Button>
					<Button>*</Button>
				</div>
				<div className="row">
					<Button>=</Button>
					<Button>0</Button>
					<Button>.</Button>
					<Button>/</Button>
				</div>
			</div>
		</div>
	);
}

export default App;
