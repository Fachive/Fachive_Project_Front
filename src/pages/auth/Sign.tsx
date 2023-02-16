import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../../assets/logo-vertical1.png';
import logoText from '../../assets/logo-vertical2.png';
import useInput from '../../hooks/useInput';
import useValidate from '../../hooks/useValidate';

const Sign = () => {
	const [stateSignEmail, changeEmail, setSignEmail] = useInput('');
	const [stateSignPassword, changePassword, setSignPassword] = useInput('');
	const [stateSignPasswordCheck, changePasswordCheck, setSignPasswordCheck] = useInput('');
	const [stateNickName, changeNickName, setNickName] = useInput('');
	const {
		validateUser: lockButton,
		validateEmail,
		validatePassword,
		validatePasswordCheck,
		passwordCheckError: statePasswordCheckError,
		emailError: stateEmailError,
		passwordError: statePasswordError,
		isAbled: stateDisabled,
	} = useValidate();
	const handleSign = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setSignEmail('');
		setSignPassword('');
		setNickName('');
	};
	useEffect(() => {
		lockButton(stateSignEmail, stateSignPassword, stateSignPasswordCheck, stateNickName);
		validateEmail(stateSignEmail);
		validatePassword(stateSignPassword);
		validatePasswordCheck(stateSignPassword, stateSignPasswordCheck);
	});
	return (
		<SignDiv>
			<TitleImage>
				<img src={`${logoImage}`} alt="" />
				<img src={`${logoText}`} alt="" />
			</TitleImage>
			<SignForm>
				<label htmlFor="signEmail">이메일</label>
				<SignInput
					id="signEmail"
					type="email"
					placeholder="이메일"
					value={stateSignEmail}
					onChange={(e) => {
						changeEmail(e);
					}}
				/>
				<ValidateMessageP>{stateEmailError && stateSignEmail && stateEmailError}</ValidateMessageP>
				<label htmlFor="signPassword">비밀번호</label>
				<SignInput
					id="signPassword"
					type="password"
					placeholder="8자리 이상의 비밀번호 입력"
					value={stateSignPassword}
					onChange={(e) => {
						changePassword(e);
					}}
				/>
				<ValidateMessageP>{statePasswordError && stateSignPassword && statePasswordError}</ValidateMessageP>
				<label htmlFor="signPasswordCheck">비밀번호 확인</label>
				<SignInput
					id="signPasswordCheck"
					type="password"
					placeholder="비밀번호 확인"
					value={stateSignPasswordCheck}
					onChange={(e) => {
						changePasswordCheck(e);
					}}
				/>
				<ValidateMessageP>{stateSignPassword && stateSignPasswordCheck && statePasswordCheckError}</ValidateMessageP>
				<label htmlFor="signNickname">닉네임</label>
				<SignInput
					id="signNickname"
					type="text"
					placeholder="별명"
					value={stateNickName}
					onChange={(e) => {
						changeNickName(e);
					}}
				/>
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
	margin-top: 0.5rem;
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
const ValidateMessageP = styled.p`
	margin-bottom: 15px;
	height: 15px;
	font-size: 0.9rem;
	color: red;
`;
