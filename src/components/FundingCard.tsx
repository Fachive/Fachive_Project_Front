import styled from 'styled-components';
import { CardRes } from '../types/fashionPage';

interface ResProps {
	data: CardRes;
}
const FundingCard = ({ data }: ResProps) => {
	return (
		data && (
			<CardDiv>
				<CardIMGDiv url={data.s3ImageUriList[0]}></CardIMGDiv>
				<CardInfoBoxDiv>
					<TitleDiv>{data.body}</TitleDiv>
					<HashTagDiv>#힙합 #아메카지 #인스타룩 #패셔너블</HashTagDiv>
					{/* <progress
					 value={data.percentage}
					max="100"
					style={{ width: '100%' }}
				></progress> */}
					<PundingInfoDiv>
						<div style={{ display: 'flex' }}>
							<ProfileDiv />
							<DesignerSpan>케이빌리지</DesignerSpan>
							{/* <SaleDiv>{data.percentage}% (D-3)</SaleDiv> */}
						</div>
						<div style={{ fontSize: '20px', fontWeight: '600', color: '#1A3568' }}>{data.targetPrice}원</div>
					</PundingInfoDiv>
				</CardInfoBoxDiv>
			</CardDiv>
		)
	);
};
export default FundingCard;

const CardDiv = styled.div`
	border-radius: 10px;
	min-width: 312px;
`;

const CardInfoBoxDiv = styled.div`
	margin-top: 15px;
	margin-bottom: 15px;
`;
const CardIMGDiv = styled.img<{ url: string }>`
	height: 252px;
	background-position: 50% 50%;
	width: 100%;
	background-image: url(${(props) => props.url});
	background-size: cover;
	border-radius: 20px;
`;

const TitleDiv = styled.div`
	font-weight: 800;
`;
const SaleDiv = styled.div`
	margin-left: 5px;
	color: skyblue;
	font-weight: 600;
`;
const HashTagDiv = styled.div`
	color: #b3b3b3;
`;
const PundingInfoDiv = styled.div`
	display: flex;
	margin: 15px 0px;
	justify-content: space-between;
`;

const DesignerSpan = styled.span`
	margin-left: 10px;
`;
const ProfileDiv = styled.div`
	background-color: #b3b3b3;
	width: 20px;
	border-radius: 10px;
	height: 20px;
`;
