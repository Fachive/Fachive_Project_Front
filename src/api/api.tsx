import axios from 'axios';

const customAxios = axios.create({
	baseURL: 'http://ec2-54-180-7-198.ap-northeast-2.compute.amazonaws.com:8080',
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
export const signApi = async () => {
	const data = await customAxios.post(
		'http://ec2-54-180-7-198.ap-northeast-2.compute.amazonaws.com:8080/user/auth/post',
		{
			headers: {
				'Content-Type': 'application/json',
			},
			body: {
				career: '10',
				city: '인천',
				company: '패카이브',
				displayName: '안뇽',
				education: '서울대학교',
				email: 'ddd@naver.com',
				password: '123456789',
				state: 'aa',
				userinfo: 'bb',
			},
		}
	);
	return data;
};
