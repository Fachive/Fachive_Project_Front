import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../../assets/logo-vertical1.png';
import logoText from '../../assets/logo-vertical2.png';

const Sign = () => {
	return (
		<SignDiv>
			<TitleImage>
				<img src={`${logoImage}`} alt="" />
				<img src={`${logoText}`} alt="" />
			</TitleImage>
			<SignForm>
				<label htmlFor="signEmail">이메일</label>
				<SignInput id="signEmail" type="email" placeholder="이메일" />
				<label htmlFor="signPassword">비밀번호</label>
				<SignInput id="signPassword" type="password" placeholder="비밀번호 입력" />
				<label htmlFor="signPasswordCheck">비밀번호 확인</label>
				<SignInput id="signPasswordCheck" type="password" placeholder="비밀번호 확인" />
				<label htmlFor="signNickname">닉네임</label>
				<SignInput id="signNickname" type="text" placeholder="2~8자 이내로 설정해주세요" />
				<label htmlFor="signAgree">패카이브 가입 약관 동의</label>
				<SignInput id="signAgree" type="text" placeholder="2~8자 이내로 설정해주세요" />
				<SignButton>회원가입</SignButton>
				<Link to={'/login'}>log in</Link>
			</SignForm>
		</SignDiv>
	);
};

export default Sign;
const SignDiv = styled.div`
	position: absolute;
	top: 55%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 364px;
	height: 688px;
`;

const TitleImage = styled.div`
	text-align: center;
	font-size: 1.5rem;
`;
const SignForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const SignInput = styled.input`
	box-sizing: border-box;
	padding: 0.8rem 1rem;
	margin-bottom: 1rem;
	border-radius: 5px;
	border: 0.5px solid #ebebeb;
`;

const SignButton = styled.button`
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	margin: 0px auto;
	width: 100%;
	padding: 15px 10px;
	background-color: #00b2ff;
	font-weight: bold;
	color: white;
	border: none;
	border-radius: 5px;
`;
