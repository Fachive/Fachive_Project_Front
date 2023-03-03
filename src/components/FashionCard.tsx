import styled from 'styled-components';
import { BiLike } from 'react-icons/bi';
import { IoEyeOutline } from 'react-icons/io5';
import { CardRes } from '../types/fashionPage';

interface ResProps {
	data: CardRes;
}

const FashionCard = ({ data }: ResProps) => {
	const like = Math.trunc(Math.random() * 1000);
	const views = Math.trunc(Math.random() * 1000);

	return (
		<Card>
			<CardDiv imgSrc={data.s3ImageUriList[0]}></CardDiv>
			<CardInfoBox>
				<CardLeftInfo>
					<Profile />
					<Designer>
						{/* {data.displayName?.length > 10
							? data.displayName?.slice(0, 10) + '....'
							: data.displayName} */}
						backEnd
					</Designer>
				</CardLeftInfo>
				<CardLeftRightInfo>
					<BiLike size="22" />
					{like > 10000 ? Math.trunc(like / 1000) + 'k' : like}
					<IoEyeOutline size="22" />
					{views > 10000 ? Math.trunc(views / 10000) + 'k' : views}
				</CardLeftRightInfo>
			</CardInfoBox>
		</Card>
	);
};
export default FashionCard;

const CardLeftRightInfo = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr 2fr;
	gap: 5px;
	align-items: center;
`;
const CardLeftInfo = styled.div`
	display: flex;
`;
const Card = styled.div`
	border-radius: 10px;
	min-width: 310px;
	flex: none;
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
const CardDiv = styled.div<{ imgSrc: string }>`
	width: 100%;
	height: 252px;
	border-radius: 10px;
	background-image: url(${(props) => props.imgSrc});
	background-position: 50% 50%;
	background-size: contain;
	background-repeat: no-repeat;
	flex: none;
`;
