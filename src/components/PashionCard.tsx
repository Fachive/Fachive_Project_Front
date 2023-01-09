import styled from 'styled-components';
import IMG from '../assets/img.png';
import { BiLike } from 'react-icons/bi';
import { IoEyeOutline } from 'react-icons/io5';
const PashionCard = () => {
	return (
		<Card>
			<CardIMG></CardIMG>
			<CardInfoBox>
				<div style={{ display: 'flex' }}>
					<Profile />
					<Designer>Designer Choi</Designer>
				</div>
				<div>
					<BiLike size="22" />
					33
					<IoEyeOutline style={{ marginLeft: '15px' }} size="22" />
					666
				</div>
			</CardInfoBox>
		</Card>
	);
};
export default PashionCard;
const Card = styled.div`
	margin-left: 10px;
	border-radius: 10px;
	overflow: hidden;
	width: 336px;
`;
const Designer = styled.span`
	margin-left: 15px;
`;
const Profile = styled.div`
	background-color: #c5c5c5;
	width: 20px;
	border-radius: 10px;
	height: 20px;
`;
const CardInfoBox = styled.div`
	margin-top: 15px;
	margin-bottom: 15px;
	display: flex;
	justify-content: space-between;
`;
const CardIMG = styled.div`
	height: 252px;
	width: 336px;
	background-image: url(${IMG});
	background-size: cover;
	border-radius: 10px;
`;
