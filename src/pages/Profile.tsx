import React from 'react';
import styled from 'styled-components';

const Profile = () => {
	return (
		<ProfileDiv>
			<UpperPartDiv>
				<ImageDiv></ImageDiv>
			</UpperPartDiv>
			<MiddlePartDiv>
				<MiddleInnerDiv>
					<MiddleTitleDiv>
						<h3>Designer Choi</h3>
						<p>choichoi@naver.com</p>
					</MiddleTitleDiv>
					<MiddlePickDiv>
						<span>패션픽업</span>|<span>패션픽업</span>|<span>패션픽업</span>
					</MiddlePickDiv>
					<MiddleIntroDiv>
						<p>
							한 줄 소개 <br />
							여성복전문 |OO브랜드 디자이너 인턴과정 수료 | OO대학교 디자인과전공
						</p>
					</MiddleIntroDiv>
				</MiddleInnerDiv>
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
	background-color: white;
`;
const ImageDiv = styled.div`
	position: relative;
	top: 75%;
	left: 10%;
	margin: 0px -6%;
	width: 180px;
	height: 180px;
	border-radius: 50%;
	border: 5px solid white;
	background-color: #f6f6f6;
`;
const LowerPartDiv = styled.div`
	width: calc(100% + 11.55%);
	margin: 0px -6%;
	height: 20vh;
	background-color: #f6f6f6;
`;
const MiddleInnerDiv = styled.div`
	box-sizing: border-box;
	width: 60%;
	margin: 0 auto;
	padding: 30px 0;
`;
const MiddleTitleDiv = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	padding: 10px 0;
	h3 {
		font-size: 2rem;
		margin-right: 10px;
	}
`;
const MiddlePickDiv = styled.div`
	box-sizing: border-box;
	padding: 10px 0;
`;
const MiddleIntroDiv = styled.div`
	box-sizing: border-box;
	padding: 10px 0;
`;
