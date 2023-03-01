import axios from 'axios';

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
export const loginApi = async () => {
	const data = await customAxios.post(
		'/user/auth/login',
		{
			email: 'test111111@naver.com',
			password: 'test1111',
		},
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);
	return data;
};
export const getEmailTokenApi = async (email: string) => {
	const data = await customAxios.post(`/email/create/token?email=${email}`);
	return data;
};

export const checkEmailTokenApi = async (email: string) => {
	const data = await customAxios.get(`/email/confirm-email?token=${email}`);
	return data;
};
