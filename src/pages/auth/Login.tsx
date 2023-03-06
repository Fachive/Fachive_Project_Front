import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../../assets/logo-vertical1.png';
import logoText from '../../assets/logo-vertical2.png';
import kakao from '../../assets/kakao.jpg';
import naver from '../../assets/naver.jpg';
import google from '../../assets/google.jpg';
import { loginApi } from '../../api/api';
import axios from 'axios';
import useInput from '../../hooks/useInput';

const Login = () => {
	const nav = useNavigate();
	const [stateLoginEmail, changeLoginEmail, setLoginEmail] = useInput('');
	const [stateLoginPassword, changeLoginPassword, setLoginPassword] = useInput('');
	async function onClickKakao() {
		const res = await axios.get(
			'https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fscope%3Dprofile_nickname%2520account_email%26response_type%3Dcode%26state%3DyvBBBThQeYtzuva8raC14Y26Y1XN7Ysxz1qMtHpe_bQ%253D%26redirect_uri%3Dhttps%253A%252F%252Ffachive.kro.kr%252Flogin%252Foauth2%252Fcode%252Fkakao%26through_account%3Dtrue%26client_id%3Dfb02b63ae364416393d9e495dfb7c0bc#login'
		);
		return res;
	}
	async function onClickGoogle() {
		const res = await axios.get(
			'https://fachive.kro.kr/login/oauth2/code/google?state=DjBJ5h4uJGpl52wAad4KrXh2l_Y_Hol3-k4yL7xAuwQ%3D&code=4%2F0AWtgzh5F7guSenqXJutjm-_sYoyvvOgzODsdhk1wcL9l9htyrK0QVIwCuDAa8AycX2068A&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&authuser=0&prompt=none'
		);
		return res;
	}
	return (
		<LoginDiv>
			<TitleImageDiv>
				<img src={`${logoImage}`} alt="" />
				<img src={`${logoText}`} alt="" />
			</TitleImageDiv>
			<form>
				<InputContainer>
					<LoginInput type="email" placeholder="아이디" onChange={(e) => changeLoginEmail(e)} />
					<LoginInput type="password" placeholder="비밀번호" onChange={(e) => changeLoginPassword(e)} />
				</InputContainer>
				<LoginButton
					onClick={async (e) => {
						e.preventDefault();
						const data = await loginApi(stateLoginEmail, stateLoginPassword);

						if (data !== undefined && data?.data.length !== 0) {
							nav('/');
						} else {
							alert('이메일이나 비밀번호가 올바르지 않습니다. 다시 시도해주세요');
						}
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
				<a
					href={
						'https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fscope%3Dprofile_nickname%2520account_email%26response_type%3Dcode%26state%3DyvBBBThQeYtzuva8raC14Y26Y1XN7Ysxz1qMtHpe_bQ%253D%26redirect_uri%3Dhttps%253A%252F%252Ffachive.kro.kr%252Flogin%252Foauth2%252Fcode%252Fkakao%26through_account%3Dtrue%26client_id%3Dfb02b63ae364416393d9e495dfb7c0bc#login'
					}
				>
					<img src={`${kakao}`} alt="" onClick={onClickKakao} />
				</a>
				<a href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=0EIcVhqxOkoYijiKDftK&scope=name%20email&state=wiImg0q8t8MLU69-GwaEp44V_EP-20uhYruOu8MWdKQ%3D&redirect_uri=https://fachive.kro.kr/login/oauth2/code/naver">
					<img src={`${naver}`} alt="" />
				</a>
				<a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=949571754376-jo565rnok1d4r3li488pvlkm3c3ts2gv.apps.googleusercontent.com&scope=openid%20profile%20email&state=URyfFHIu0Be-HzKsXgzUQVYetP1lDWZ5DSrH98A-DXs%3D&redirect_uri=https%3A%2F%2Ffachive.kro.kr%2Flogin%2Foauth2%2Fcode%2Fgoogle&nonce=Lpf4t3d3cEV4Br7QoE21puf1CqVsEPeeEaCASSLN5sA&service=lso&o2v=2&flowName=GeneralOAuthFlow">
					<img src={`${google}`} alt="" onClick={onClickGoogle} />
				</a>
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
	a {
		width: 30%;
		img {
			width: 100%;
			border: 0.3px solid #eee;
			border-radius: 50%;
		}
	}
`;
