import styled from 'styled-components';
import homeImg from '../assets/homeImg.png';
import fundingImg from '../assets/fundingImg.png';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { CardRes } from '../types/fashionPage';
import FashionCard from '../components/FashionCard';
import FundingCard from '../components/FundingCard';
const Home = () => {
	const [CardData, setCardData] = useState<Array<CardRes>[]>([]);

	const getData = async () => {
		const res1 = await axios.get(
			'http://ec2-54-180-7-198.ap-northeast-2.compute.amazonaws.com:8080/fashionpickup/main/get'
		);
		setCardData((prev) => [...prev, res1.data.data]);

		const res2 = await axios.get(
			'http://ec2-54-180-7-198.ap-northeast-2.compute.amazonaws.com:8080/funding/mainPageGet'
		);
		setCardData((prev) => [...prev, res2.data.data]);
	};
	const [current, setCurrent] = useState(0);
	const [style, setStyle] = useState({
		marginLeft: `-${current * 2}0%`,
	});
	const imgSize = useRef(10);

	const moveSlide = (i: number) => {
		let nextIndex = current + i;
		if (nextIndex === -1) return;
		if (nextIndex < 0) nextIndex = imgSize.current - 1;
		else if (nextIndex >= imgSize.current) return;

		setCurrent(nextIndex);
	};

	useEffect(() => {
		setStyle({ marginLeft: `-${current * 2}0%` });
	}, [current]);

	useEffect(() => {
		getData();
	}, []);

	return (
		<Container>
			<SlideImg />
			<RecommendTitle>패카이브 추천 픽</RecommendTitle>

			<FachiveRecommend>
				<button onClick={() => moveSlide(-1)}>이전</button>
				<RecommendFlexDiv style={style}>
					{CardData[0]?.slice(0, 10).map((fashionData, idx) => {
						return <FashionCard data={fashionData} idx={idx} />;
					})}
				</RecommendFlexDiv>
				<button onClick={() => moveSlide(+1)}>다음</button>
			</FachiveRecommend>
			<RecommendButton>패션추천 바로 가기</RecommendButton>
			<FundingImg />
			<RecommendTitle>패카이브 추천 픽</RecommendTitle>
			<FachiveRecommend>
				<RecommendFlexDiv style={style}>
					{CardData[1]?.slice(0, 10).map((fundingData) => {
						return <FundingCard data={fundingData} />;
					})}
				</RecommendFlexDiv>
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
const FachiveRecommend = styled.div`
	overflow: hidden;
	min-width: 1700px;
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
