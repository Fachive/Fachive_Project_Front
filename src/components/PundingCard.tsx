import styled from 'styled-components';
import IMG from '../assets/img2.png';
const PundingCard = () => {
	return (
		<Card>
			<CardIMG></CardIMG>
			<CardInfoBox>
				<Title>보헤미안 스트릿 가디건</Title>
				<HashTag>#힙합 #아메카지 #인스타룩 #패셔너블</HashTag>
				<PundingInfo>
					<div style={{ display: 'flex' }}>
						<Profile />
						<Designer>케이빌리지</Designer>
						<Sale>90% (D-3)</Sale>
					</div>
					<div style={{ fontSize: '20px', fontWeight: '600' }}>32,000원</div>
				</PundingInfo>
			</CardInfoBox>
		</Card>
	);
};
export default PundingCard;
const Title = styled.div`
	font-weight: 800;
`;
const Sale = styled.div`
	margin-left: 5px;
	color: skyblue;
	font-weight: 600;
`;
const HashTag = styled.div`
	color: #b3b3b3;
`;
const PundingInfo = styled.div`
	display: flex;
	margin: 15px 0px;
	justify-content: space-between;
`;
const Card = styled.div`
	margin-left: 10px;
	border-radius: 10px;
	width: 336px;
`;
const Designer = styled.span`
	margin-left: 15px;
`;
const Profile = styled.div`
	background-color: #b3b3b3;
	width: 20px;
	border-radius: 10px;
	height: 20px;
`;
const CardInfoBox = styled.div`
	margin-top: 15px;
	margin-bottom: 15px;
`;
const CardIMG = styled.div`
	height: 252px;
	width: 336px;
	background-image: url(${IMG});
	background-size: cover;
	border-radius: 20px;
`;
