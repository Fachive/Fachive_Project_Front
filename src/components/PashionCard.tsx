import styled from 'styled-components';
import IMG from '../assets/img.png';
import { BiLike } from 'react-icons/bi';
import { IoEyeOutline } from 'react-icons/io5';
const PashionCard = () => {
	return (
		<Card>
			<CardIMG></CardIMG>
			<CardInfoBox>
				<CardLeftInfo>
					<Profile />
					<Designer>Designer Choi</Designer>
				</CardLeftInfo>
				<CardLeftRightInfo>
					<BiLike size="22" />
					33
					<IoEyeOutline style={{ marginLeft: '15px' }} size="22" />
					666
				</CardLeftRightInfo>
			</CardInfoBox>
		</Card>
	);
};
export default PashionCard;
const CardLeftRightInfo = styled.div`
	display: flex;
	gap: 5px;
`;
const CardLeftInfo = styled.div`
	display: flex;
`;
const Card = styled.div`
	margin-left: 10px;
	border-radius: 10px;
	overflow: hidden;
	width: 25%;
	min-width: 300px;
`;
const Designer = styled.span`
	margin-left: 10px;
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
	background-image: url(${IMG});
	background-size: cover;
	border-radius: 10px;
`;
