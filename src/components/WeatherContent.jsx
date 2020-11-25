import React from "react";
import styled from 'styled-components'

const Weather = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	margin-top: 16px;
`
const NameOfData = styled.p`
  color: #fff;
  font-family: 'Arial', sans-serif;
`

const WeatherContent = props => (
	<Weather>
		{ 
			props.city && props.country && 
			<NameOfData> Location: 
				<span className="weather-value"> 
				{ props.city }, 
				{ props.country }
				</span>
			</NameOfData>  
		}
		{ 
			props.temperature && 
			<NameOfData> Temperature:  
				<span className="weather-value"> 
					{ props.temperature }	
				</span>
			</NameOfData> 
		}
		{ 
			props.humidity && 
			<NameOfData> Humidity: 
				<span className="weather-value">
					{ props.humidity } 
				</span>
			</NameOfData> 
		}
		{ 
			props.description && 
			<NameOfData> Conditions: 
				<span className="weather-value"> 
					{ props.description } 
				</span>
			</NameOfData> 
		}
		{ 
			props.error && 
			<NameOfData>
				<span className="weather-value"> 
					{ props.error } 
				</span>
			</NameOfData> 
		}
	</Weather>
);

export default WeatherContent;