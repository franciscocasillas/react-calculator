import "../stylesheets/Button.css";

function Button(props) {
	const isOperator = (value) => {
		return isNaN(value) && value !== "." && value !== "=";
	};

	return (
		<div
			className={`button-container ${
				isOperator(props.children) ? "operator" : ""
			}`.trim()}
		>
			{props.children}
		</div>
	);
}

export default Button;
