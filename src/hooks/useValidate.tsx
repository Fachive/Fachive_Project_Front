import React, { useState } from 'react';
import { emailRegExp, passwordRegExp } from '../utils/regExp';

const useValidate = () => {
	const [stateDisabled, setDisabled] = useState<boolean | undefined>(true);
	const [statePasswordError, setPasswordError] = useState<string>('');
	const [statePasswordCheckError, setPasswordCheckError] = useState<string>('');
	const lockButton = (email: string, password: string, passwordCheck: string, firstName: string, lastName: string) => {
		if (emailRegExp.test(email) && passwordRegExp.test(password) && firstName && lastName && passwordCheck) {
			if (password === passwordCheck) {
				setDisabled(false);
			}
		} else {
			setDisabled(true);
		}
	};
	const validatePassword = (password: string) => {
		!passwordRegExp.test(password) !== false ? setPasswordError('유효하지 않은 비밀번호입니다.') : setPasswordError('');
	};
	const validatePasswordCheck = (password: string, CheckPassword: string) => {
		password !== CheckPassword ? setPasswordCheckError('비밀번호가 다릅니다') : setPasswordCheckError('');
	};

	return {
		validateUser: lockButton,
		validatePassword: validatePassword,
		validatePasswordCheck: validatePasswordCheck,
		passwordCheckError: statePasswordCheckError,
		passwordError: statePasswordError,
		isAbled: stateDisabled,
	};
};

export default useValidate;
