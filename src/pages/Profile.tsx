import React from 'react';
import styled from 'styled-components';

const Profile = () => {
	return (
		<ProfileDiv>
			<UpperPartDiv></UpperPartDiv>
			<span></span>
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
