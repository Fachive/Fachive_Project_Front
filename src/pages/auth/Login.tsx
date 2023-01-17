import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
	return (
		<LoginDiv>
			<TitleImage>
				<p>이미지 자리</p>
				<p>FACHIVE</p>
			</TitleImage>
			<form>
				<InputContainer>
					<LoginInput type="email" placeholder="아이디" />
					<LoginInput type="password" placeholder="비밀번호" />
				</InputContainer>
				<LoginButton>로그인</LoginButton>
				<LinkContainer>
					<Link to={'/'}>비밀번호 재설정</Link>
					<Link to={'/'}>회원가입</Link>
				</LinkContainer>
			</form>
			<SocialLoginText>다른 계정을 활용하여 간편하게 로그인</SocialLoginText>
			<SocialLogin>
				<span>카카오톡</span>
				<span>네이버</span>
				<span>구글</span>
			</SocialLogin>
		</LoginDiv>
	);
};

export default Login;
const LoginDiv = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 300px;
	height: 482px;
`;

const TitleImage = styled.div`
	text-align: center;
	font-size: 1.5rem;
`;
const InputContainer = styled.div`
	box-sizing: border-box;
	width: 100%;
	padding: 0 5%;
	text-align: center;
`;
const LoginInput = styled.input`
	box-sizing: border-box;
	width: 95%;
	padding: 15px 10px;
	border: 0.5px solid gray;
`;
const LoginButton = styled.button`
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	margin: 30px auto 10px auto;
	width: 85.5%;
	padding: 15px 10px;
	background-color: #00b2ff;
	font-weight: bold;
	color: white;
	border: none;
	border-radius: 5px;
`;
const LinkContainer = styled.div`
	box-sizing: border-box;
	text-align: center;
	a {
		margin: 0 5px;
		font-size: 0.9rem;
		text-decoration: none;
		color: #666;
	}
`;
const SocialLoginText = styled.div`
	margin: 20px 0;
	font-size: 0.7rem;
	text-align: center;
`;
const SocialLogin = styled.div`
	box-sizing: border-box;
	display: flex;
	justify-content: space-around;
	margin: 0 auto;
	width: 80%;
`;
