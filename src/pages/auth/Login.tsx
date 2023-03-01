import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../../assets/logo-vertical1.png';
import logoText from '../../assets/logo-vertical2.png';
import kakao from '../../assets/kakao.jpg';
import naver from '../../assets/naver.jpg';
import google from '../../assets/google.jpg';
<<<<<<< HEAD
import { loginApi } from '../../api/api';
=======
import axios from 'axios';
>>>>>>> fac33da54c0319612895f066f532426f9060022d

const Login = () => {
	const [stateLoginEmail, setLoginEmail] = useState<string>('');
	const [stateLoginPassword, setLoginPassword] = useState<string>('');
	async function onClickKakao() {
		const res = await axios.get(
			'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=fb02b63ae364416393d9e495dfb7c0bc&scope=profile_nickname%20account_email&state=RafymU3I4g74VtHcEW28p1cYrj90MX4zh19eWVyOgk4%3D&redirect_uri=https://fachive.kro.kr/login/oauth2/code/kakao'
		);
	}
	return (
		<LoginDiv>
			<TitleImageDiv>
				<img src={`${logoImage}`} alt="" />
				<img src={`${logoText}`} alt="" />
			</TitleImageDiv>
			<form>
				<InputContainer>
					<LoginInput type="email" placeholder="아이디" />
					<LoginInput type="password" placeholder="비밀번호" />
				</InputContainer>
				<LoginButton
					onClick={(e) => {
						e.preventDefault();
						loginApi();
					}}
				>
					로그인
				</LoginButton>
				<LinkContainer>
					<Link to={'/'}>비밀번호 재설정</Link>
					<Link to={'/sign'}>회원가입</Link>
				</LinkContainer>
			</form>
			<SocialLoginText>다른 계정을 활용하여 간편하게 로그인</SocialLoginText>
			<SocialLogin>
				<img src={`${kakao}`} alt="" onClick={onClickKakao} />
				<img src={`${naver}`} alt="" />
				<img src={`${google}`} alt="" />
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

const TitleImageDiv = styled.div`
	text-align: center;
	font-size: 1.5rem;
	margin-bottom: 2rem;
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
	border: 0.5px solid #ebebeb;
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
		margin: 0 20px;
		font-size: 0.75rem;
		font-weight: bold;
		text-decoration: none;
		color: #666;
	}
`;
const SocialLoginText = styled.div`
	margin: 20px 0;
	font-size: 0.65rem;
	text-align: center;
`;
const SocialLogin = styled.div`
	box-sizing: border-box;
	display: flex;
	justify-content: space-around;
	margin: 0 auto;
	width: 80%;
	img {
		width: 25%;
		border: 0.3px solid #eee;
		border-radius: 50%;
	}
`;
