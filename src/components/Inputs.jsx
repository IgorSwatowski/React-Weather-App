import React from "react";

const Inputs = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="Enter a city"/>
		<br></br>
		<input type="text" name="country" placeholder="Enter a country"/>
		<br></br>
		<button>Submit</button>
	</form>
);

export default Inputs;