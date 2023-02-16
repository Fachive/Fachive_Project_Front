import React, { useState } from 'react';
import { emailRegExp, passwordRegExp } from '../utils/regExp';

const useValidate = () => {
	const [stateDisabled, setDisabled] = useState<boolean | undefined>(true);
	const [stateEmailError, setEmailError] = useState<string>('');
	const [statePasswordError, setPasswordError] = useState<string>('');
	const [statePasswordCheckError, setPasswordCheckError] = useState<string>('');
	const lockButton = (email: string, password: string, passwordCheck: string, nickName: string) => {
		if (emailRegExp.test(email) && passwordRegExp.test(password) && nickName && passwordCheck) {
			if (password === passwordCheck) {
				setDisabled(false);
			}
		} else {
			setDisabled(true);
		}
	};
	const validateEmail = (email: string) => {
		!emailRegExp.test(email) !== false ? setEmailError('유효하지 않은 이메일입니다.') : setEmailError('');
	};
	const validatePassword = (password: string) => {
		!passwordRegExp.test(password) !== false ? setPasswordError('유효하지 않은 비밀번호입니다.') : setPasswordError('');
	};
	const validatePasswordCheck = (password: string, CheckPassword: string) => {
		password !== CheckPassword ? setPasswordCheckError('비밀번호가 다릅니다') : setPasswordCheckError('');
	};

	return {
		validateUser: lockButton,
		validateEmail: validateEmail,
		validatePassword: validatePassword,
		validatePasswordCheck: validatePasswordCheck,
		passwordCheckError: statePasswordCheckError,
		emailError: stateEmailError,
		passwordError: statePasswordError,
		isAbled: stateDisabled,
	};
};

export default useValidate;
