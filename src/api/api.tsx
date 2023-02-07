import axios from 'axios';
import { async } from 'q';

const customAxios = axios.create({
	baseURL: 'http://ec2-54-180-7-198.ap-northeast-2.compute.amazonaws.com:8080',
	timeout: 1000,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const fashionPickUpDetailApi = async (num: string) => {
	const data = await customAxios.get(`/fashionpickup/multiGet?postFashionEntityId=${num}`);
	return data;
};
export const fashionPickUpDetailApi22 = async () => {
	const data = await customAxios.get('/fashionpickup/multiGet?postFashionEntityId=1');
	return data;
};
