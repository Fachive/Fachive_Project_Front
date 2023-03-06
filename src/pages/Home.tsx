import styled from 'styled-components';
import homeImg from '../assets/homeImg.png';
import fundingImg from '../assets/fundingImg.png';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { CardRes } from '../types/fashionPage';
import FashionCard from '../components/FashionCard';
import FundingCard from '../components/FundingCard';

import { Link, useNavigate } from 'react-router-dom';
import { userToken } from '../api/api';

const Home = () => {
	const [FashionCardData, setFashionCardData] = useState<CardRes[]>([]);
	const [FundingCardData, setFundingCardData] = useState<CardRes[]>([]);
	const nav = useNavigate();

	const getData = async () => {
		const res1 = await axios.get('https://fachive.kro.kr/main/auth/get/ten');
		setFashionCardData(res1.data.fashionpickList);
		setFundingCardData(res1.data.fundingList);
	};

	const [currentFashion, setCurrentFashion] = useState(0);
	const [currentFunding, setCurrentFunding] = useState(0);

	const [styleFashion, setStyleFashion] = useState({
		transform: `translate(-${currentFashion * 345}px)`,
	});

	const [styleFunding, setStyleFunding] = useState({
		transform: `translate(-${currentFunding * 345}px)`,
	});

	const imgSize = useRef(5);

	const moveSlideFashion = (i: number) => {
		let nextIndex = currentFashion + i;
		if (nextIndex === -1) return;
		if (nextIndex < 0) nextIndex = imgSize.current - 1;
		else if (nextIndex >= imgSize.current) return;

		setCurrentFashion(nextIndex);
	};

	const moveSlideFunding = (i: number) => {
		let nextIndex = currentFunding + i;
		if (nextIndex === -1) return;
		if (nextIndex < 0) nextIndex = imgSize.current - 1;
		else if (nextIndex >= imgSize.current) return;

		setCurrentFunding(nextIndex);
	};

	useEffect(() => {
		setStyleFashion({ transform: `translate(-${currentFashion * 345}px)` });
		setStyleFunding({ transform: `translate(-${currentFunding * 347}px)` });
	}, [currentFashion, currentFunding]);

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		userToken();
	}, []);

	return (
		<Container>
			<SlideImg />
			<ButtonDiv>
				<RecommendTitle>패카이브 추천 픽</RecommendTitle>
				<div>
					<ButtonItemButton onClick={() => moveSlideFashion(-1)}>&lt;</ButtonItemButton>
					<ButtonItemButton onClick={() => moveSlideFashion(+1)}>&gt;</ButtonItemButton>
				</div>
			</ButtonDiv>

			<FachiveFashionRecommend>
				<RecommendFlexDiv style={styleFashion}>
					{FashionCardData.map((fashionData) => {
						return (
							<Link
								style={{ textDecoration: 'none', color: 'black' }}
								to={`fashion/detail/${fashionData.fashionPickupEntityId}`}
							>
								<FashionCard data={fashionData} />
							</Link>
						);
					})}
				</RecommendFlexDiv>
			</FachiveFashionRecommend>

			<RecommendButton onClick={() => nav('fashion')}>패션추천 바로 가기</RecommendButton>

			<FundingImg />
			<ButtonDiv>
				<RecommendTitle>곧 마감되는 펀딩</RecommendTitle>
				<div>
					<ButtonItemButton onClick={() => moveSlideFunding(-1)}>&lt;</ButtonItemButton>
					<ButtonItemButton onClick={() => moveSlideFunding(+1)}>&gt;</ButtonItemButton>
				</div>
			</ButtonDiv>
			<FachiveFundingRecommend>
				<RecommendFlexDiv style={styleFunding}>
					{FundingCardData.map((fundingData) => {
						return (
							<Link
								style={{ textDecoration: 'none', color: 'black' }}
								to={`funding/detail/${fundingData.fundingEntityId}`}
							>
								<FundingCard data={fundingData} />
							</Link>
						);
					})}
				</RecommendFlexDiv>
			</FachiveFundingRecommend>
			<RecommendButton onClick={() => nav('funding')}>펀딩 바로 가기</RecommendButton>
		</Container>
	);
};

export default Home;

const ButtonDiv = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ButtonItemButton = styled.button`
	margin-left: 10px;
	margin-top: 30px;
	margin-bottom: 10px;
	font-weight: 600;
	font-size: 16px;
	background-color: white;
	border: none;
	width: 8px;
	height: 16px;
	margin-left: 20px;
	padding-right: 30px;
`;

const RecommendButton = styled.button`
	width: 500px;
	margin: 50px auto;
	border: none;
	padding: 15px;
	font-size: 16px;
	font-weight: 700;
	text-decoration: none;
	cursor: pointer;
`;
const RecommendFlexDiv = styled.div`
	display: flex;
	gap: 35px;
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

const FachiveFashionRecommend = styled.div`
	overflow: hidden;
`;

const FachiveFundingRecommend = styled.div`
	overflow: hidden;
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
