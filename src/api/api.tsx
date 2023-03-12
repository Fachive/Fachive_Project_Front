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
	const data = await customAxios.get(`/fashionpickup/auth/get/${num}`);
	return data;
};
export const fundingPickUpDetailApi = async (num: string) => {
	const data = await customAxios.get(`/funding/auth/get/${num}`);
	return data;
};
export const portfolioPickUpDetailApi = async (num: string) => {
	const data = await customAxios.get(`/portfolio/auth/get/${num}`);
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
		const token = data.data.token.split(':').join(' ');
		console.log(token);
		window.sessionStorage.setItem('displayName', data.data.displayName);
		window.sessionStorage.setItem('email', data.data.email);

		window.sessionStorage.setItem('token', data.data.token.split(':').join(''));
		window.sessionStorage.setItem('userId', data.data.userId);
		console.log(window.sessionStorage.getItem('token'));
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

// export const userToken = async () => {
// 	const data = await customAxios.get('');
// 	console.log(data);
// 	// window.sessionStorage.setItem('usertoken', data);
// };

export const postComment = async (comment: string, postId: number, postType: string, userId: number) => {
	const data = await axios.post(
		'https://fachive.kro.kr:443/comment/post',
		{
			commentBody: comment,
			postId: postId,
			postType: postType,
			userId: userId,
		},
		{
			headers: {
				Authorization: window.sessionStorage.getItem('token')?.split(':').join(''),
			},
		}
	);
	return data;
};
export const deleteComment = async (commentId: number, postType: string, postId: number) => {
	const data = await axios.delete(
		`https://fachive.kro.kr/comment/delete?commentId=${commentId}&postType=${postType}&postId=${postId}`,
		{
			headers: {
				Authorization: window.sessionStorage.getItem('token')?.split(':').join(''),
			},
		}
	);
	return data;
};
// export const deleteComment = async (commentId: number, postType: string, postId: number) => {
// 	const data = await axios.delete(
// 		'https://fachive.kro.kr:443/comment/delete',
// 		{
// 			commentId,
// 			postType,
// 			postId,
// 		},
// 		{
// 			headers: {
// 				Authorization: window.sessionStorage.getItem('token')?.split(':').join(''),
// 			},
// 		}
// 	);
// 	return data;
// };
