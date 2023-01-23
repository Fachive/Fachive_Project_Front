import styled from 'styled-components';
import { BiLike } from 'react-icons/bi';
import { IoEyeOutline } from 'react-icons/io5';
import { FashionRes } from '../pages/Fashion/Fashion';

interface ResProps {
	data: FashionRes;
}

const FashionCard = ({ data }: ResProps) => {
	return (
		<Card>
			<CardIMG src={data.postImageDto.fileURI}></CardIMG>
			<CardInfoBox>
				<CardLeftInfo>
					<Profile />
					<Designer>
						{data.displayName.length > 10 ? data.displayName.slice(0, 10) + '....' : data.displayName}
					</Designer>
				</CardLeftInfo>
				<CardLeftRightInfo>
					<BiLike size="22" />
					{data.pickup > 10000 ? Math.trunc(data.pickup / 1000) + 'k' : data.pickup}
					<IoEyeOutline style={{ marginLeft: '15px' }} size="22" />
					{data.views > 10000 ? Math.trunc(data.views / 10000) + 'k' : data.views}
				</CardLeftRightInfo>
			</CardInfoBox>
		</Card>
	);
};
export default FashionCard;

const CardLeftRightInfo = styled.div`
	display: flex;
	gap: 5px;
`;
const CardLeftInfo = styled.div`
	display: flex;
`;
const Card = styled.div`
	border-radius: 10px;
	min-width: 250px;
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
const CardIMG = styled.img`
	object-fit: cover;
	width: 100%;
	border-radius: 10px;
`;
