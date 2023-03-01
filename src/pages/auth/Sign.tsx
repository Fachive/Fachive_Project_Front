import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { checkEmailTokenApi, getEmailTokenApi, signApi } from '../../api/api';
import logoImage from '../../assets/logo-vertical1.png';
import logoText from '../../assets/logo-vertical2.png';
import useInput from '../../hooks/useInput';
import useValidate from '../../hooks/useValidate';

const Sign = () => {
	const [stateSignEmail, changeEmail, setSignEmail] = useInput('');
	const [stateSignPassword, changePassword, setSignPassword] = useInput('');
	const [stateSignPasswordCheck, changePasswordCheck, setSignPasswordCheck] = useInput('');
	const [stateNickName, changeNickName, setNickName] = useInput('');
	const [stateEmailToken, changeEmailTokene, setEmailToken] = useInput('');
	const [stateTokenInputMount, setTokenInputMount] = useState(true);
	const [stateToeknButtonLock, setToeknButtonLock] = useState(false);
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
		lockButton(stateSignEmail, stateSignPassword, stateSignPasswordCheck, stateNickName, stateEmailToken);
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
				<TitleLabel htmlFor="signEmail">이메일</TitleLabel>
				<SendTokenDiv>
					<EmailInput
						id="signEmail"
						type="email"
						placeholder="이메일"
						value={stateSignEmail}
						onChange={(e) => {
							changeEmail(e);
						}}
					/>
					<SendTokenButton
						disabled={!stateTokenInputMount}
						onClick={async (e) => {
							e.preventDefault();
							const data = await getEmailTokenApi(stateSignEmail);
							setTokenInputMount(data == undefined ? true : false);
						}}
					>
						토큰받기
					</SendTokenButton>
				</SendTokenDiv>
				<ValidateMessageP>{stateEmailError && stateSignEmail && stateEmailError}</ValidateMessageP>
				{!stateTokenInputMount && (
					<>
						<SignInput
							type="text"
							placeholder="인증토큰을 입력하세요"
							onChange={(e) => {
								changeEmailTokene(e);
							}}
						/>
						<SignButton
							disabled={stateToeknButtonLock}
							onClick={async (e) => {
								e.preventDefault();
								const data = await checkEmailTokenApi(stateEmailToken);
								setToeknButtonLock(data == undefined ? false : true);
							}}
						>
							인증
						</SignButton>
					</>
				)}
				<TitleLabel htmlFor="signPassword">비밀번호</TitleLabel>
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
				<TitleLabel htmlFor="signPasswordCheck">비밀번호 확인</TitleLabel>
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
				<TitleLabel htmlFor="signNickname">닉네임</TitleLabel>
				<SignInput
					id="signNickname"
					type="text"
					placeholder="별명"
					value={stateNickName}
					onChange={(e) => {
						changeNickName(e);
					}}
				/>
				<TitleLabel htmlFor="signAgree">패카이브 가입 약관 동의</TitleLabel>
				<SignInput id="signAgree" type="text" placeholder="2~8자 이내로 설정해주세요" />
				<SignButton
					disabled={stateDisabled}
					onClick={(e) => {
						e.preventDefault();
						signApi(stateSignEmail, stateSignPassword, stateNickName, stateEmailToken);
					}}
				>
					회원가입
				</SignButton>
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
	padding: 0.5rem 1rem;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	border-radius: 5px;
	border: 0.5px solid #ebebeb;
`;
const EmailInput = styled.input`
	box-sizing: border-box;
	width: 70%;
	padding: 0.5rem 1rem;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	border-radius: 5px;
	border: 0.5px solid #ebebeb;
`;
const SendTokenDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const SendTokenButton = styled.button`
	padding: 0.4rem 0.5rem;
	width: 25%;
	background-color: #00b2ff;
	font-weight: bold;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	&:disabled {
		background-color: #666;
		cursor: default;
	}
`;

const SignButton = styled.button`
	&:disabled {
		background-color: #666;
		cursor: default;
	}
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
	cursor: pointer;
`;
const ValidateMessageP = styled.p`
	margin-bottom: 10px;
	height: 10px;
	font-size: 0.9rem;
	color: red;
`;
const TitleLabel = styled.label`
	font-size: 0.9rem;
`;
