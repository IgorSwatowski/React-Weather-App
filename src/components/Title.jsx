import React from "react";
import styled from 'styled-components'

const InfoTopWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
`
const TitleContainerTop = styled.h1`
  color: #fff;
  font-family: 'Arial', sans-serif;
`
const TitleContainerBottom = styled.h3`
  color: #fff;
  font-family: 'Arial', sans-serif;
  margin-top: -19px;
`

const Titles = () => (
	<InfoTopWrapper>
		<TitleContainerTop>Find your weather now.</TitleContainerTop>
		<TitleContainerBottom>Do you want to find your city temperature? Let's go.</TitleContainerBottom>
	</InfoTopWrapper>
);

export default Titles;