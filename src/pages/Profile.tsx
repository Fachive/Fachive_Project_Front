import React from 'react';
import styled from 'styled-components';

const Profile = () => {
	return (
		<ProfileDiv>
			<UpperPartDiv></UpperPartDiv>
			<MiddlePartDiv>
				<ImageDiv></ImageDiv>
			</MiddlePartDiv>
			<LowerPartDiv></LowerPartDiv>
		</ProfileDiv>
	);
};

export default Profile;

const ProfileDiv = styled.div`
	height: calc(100vh - 65px);
`;
const UpperPartDiv = styled.div`
	width: calc(100% + 11.55%);
	margin: 0px -6%;
	height: calc(33vh - 60px);
	background-color: #f6f6f6;
`;
const MiddlePartDiv = styled.div`
	width: calc(100% + 11.55%);
	margin: 0px -6%;
	height: 20vh;
	background-color: white;
`;
const ImageDiv = styled.div`
	position: relative;
	top: -30%;
	left: 10%;
	margin: 0px -6%;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border: 5px solid white;
	background-color: #f6f6f6;
`;
const LowerPartDiv = styled.div`
	width: calc(100% + 11.55%);
	margin: 0px -6%;
	height: 20vh;
	/* background-color: black; */
`;
