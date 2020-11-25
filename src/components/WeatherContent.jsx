import React from "react";

const WeatherContent = props => (
	<div className="weather">
		{ 
			props.city && props.country && 
			<p className="weather-key-number"> Location: 
				<span className="weather-value"> 
				{ props.city }, 
				{ props.country }
				</span>
			</p>  
		}
		{ 
			props.temperature && 
			<p className="weather-key-number"> Temperature: 
				<span className="weather-value"> 
					{ props.temperature }	
				</span>
			</p> 
		}
		{ 
			props.humidity && 
			<p className="weather-key-number"> Humidity: 
				<span className="weather-value">
					{ props.humidity } 
				</span>
			</p> 
		}
		{ 
			props.description && 
			<p className="weather-key-number"> Conditions: 
				<span className="weather-value"> 
					{ props.description } 
				</span>
			</p> 
		}
		{ 
			props.error && 
			<p className="weather-key-number">
				<span className="weather-value"> 
					{ props.error } 
				</span>
			</p> 
		}
	</div>
);

export default WeatherContent;