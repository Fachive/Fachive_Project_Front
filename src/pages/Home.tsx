import PashionCard from '../components/PashionCard';
import PundingCard from '../components/PundingCard';
import styled from 'styled-components';
import homeImg from '../assets/homeImg.png';
import fundingImg from '../assets/fundingImg.png';

const Home = () => {
	return (
		<Container>
			<SlideImg />
			<RecommendTitle>패카이브 추천 픽</RecommendTitle>

			<FachiveRecommend>
				<PashionCard />
				<PashionCard />
				<PashionCard />
				<PashionCard />
				<PashionCard />
				<PashionCard />
				<PashionCard />
				<PashionCard />
				<PashionCard />
				<PashionCard />
			</FachiveRecommend>
			<RecommendButton>패션추천 바로 가기</RecommendButton>
			<FundingImg />
			<RecommendTitle>패카이브 추천 픽</RecommendTitle>
			<FachiveRecommend>
				<PundingCard />
				<PundingCard />
				<PundingCard />
				<PundingCard />
				<PundingCard />
				<PundingCard />
			</FachiveRecommend>
		</Container>
	);
};

export default Home;

const RecommendButton = styled.button`
	width: 500px;
	margin: 50px auto;
	border: none;
	padding: 15px;
	font-size: 16px;
	font-weight: 700;
	cursor: pointer;
`;
const RecommendTitle = styled.div`
	margin-left: 10px;
	margin-top: 30px;
	margin-bottom: 10px;
	font-weight: 800;
`;
const FundingImg = styled.img`
	width: 100%;
	height: 295px;
	border: none;
	background-image: url(${fundingImg});
	background-size: cover;
	background-repeat: no-repeat;
	margin-bottom: 30px;
	border-radius: 30px;
	background-position: center;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
const FachiveRecommend = styled.div`
	display: flex;
	overflow-x: scroll;
	gap: 12px;
	width: 100%;
`;
const SlideImg = styled.img`
	max-width: 100%;
	height: 500px;
	background-image: url(${homeImg});
	background-size: cover;
	border-radius: 30px;
	background-position: center;
	background-repeat: no-repeat;
`;
