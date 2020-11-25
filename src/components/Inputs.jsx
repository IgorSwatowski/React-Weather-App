import React from "react";
import styled from 'styled-components'

const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	margin-top: 16px;
`
const Input = styled.input`
  padding: 15px;
`
const Button = styled.button`
  color: #fff;
  font-family: 'Arial', sans-serif;
  border: 1px solid #fff;
  padding: 12px 44px 12px 44px;
  background: transparent;
`

const Inputs = props => (
	<Form onSubmit={props.getWeather}>
		<Input type="text" name="city" placeholder="Enter a city"/>
		<br></br>
		<Input type="text" name="country" placeholder="Enter a country"/>
		<br></br>
		<Button>Submit</Button>
	</Form>
);

export default Inputs;