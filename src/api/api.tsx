import axios from 'axios';
import { emailRegExp } from '../utils/regExp';

const customAxios = axios.create({
	baseURL: 'https://fachive.kro.kr:443',
	timeout: 1000,
	headers: {
		'Content-Type': 'application/json',
	},
});
export const fashionPickUpDetailApi = async (num: string) => {
	const data = await customAxios.get(`/fashionpickup/get/${num}`);
	return data;
};
export const fashionPickUpDetailApi22 = async () => {
	const data = await customAxios.get('/fashionpickup/multiGet?postFashionEntityId=1');
	return data;
};
export const signApi = async (email: string, password: string, displayName: string, emailToken: string) => {
	try {
		const data = await customAxios.post(
			'/user/auth/sighup',
			{
				career: '10년',
				city: '인천',
				company: '패카이브',
				displayName,
				education: '서울대학교',
				email,
				password,
				emailToken,
				state: 'aa',
				userinfo: 'bb',
				multipartFileList: [],
				role: 'GENERAL',
			},
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		);
		alert('회원가입 성공');
		window.location.href = '/login';
		return data;
	} catch (error) {
		alert('회원가입 실패');
	}
};
export const loginApi = async (email: string, password: string) => {
	try {
		const data = await customAxios.post(
			'/user/auth/login',
			{
				email,
				password,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		window.sessionStorage.setItem('displayName', data.data.displayName);
		window.sessionStorage.setItem('email', data.data.email);
		return data;
	} catch (error) {
		console.log('error');
	}
};
export const getEmailTokenApi = async (email: string) => {
	if (emailRegExp.test(email)) {
		const data = await customAxios.post(`/email/create/token?email=${email}`);
		return data;
	} else {
		alert('올바른 이메일을 입력해주세요');
	}
};

export const checkEmailTokenApi = async (email: string) => {
	try {
		const data = await customAxios.get(`/email/confirm-email?token=${email}`);
		alert('인증에 성공하셨습니다');
		return data;
	} catch (error) {
		alert('인증에 실패하셨습니다');
	}
};

export const userToken = async () => {
	const data = await customAxios.get('/');
	console.log(data);
	// window.sessionStorage.setItem('token', data)
};
