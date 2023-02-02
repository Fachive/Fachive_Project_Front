import styled, { css } from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import {
	accessory,
	accessoryClick,
	all,
	allClick,
	dress,
	dressClick,
	onepiece,
	onepieceClick,
	outter,
	outterClick,
	pants,
	pantsClick,
	skirt,
	skirtClick,
	suit,
	suitClick,
	tshirts,
	tshirtsClick,
} from '../../assets';
import axios from 'axios';
import FashionCard from '../../components/FashionCard';
import Pagination from '../../components/Pagination';
import { useLocation } from 'react-router-dom';
import FundingCard from '../../components/FundingCard';
import { CardRes } from '../../types/fashionPage';

const FILTER = ['추천순', '최신순', '마이픽'];
const CATEGORY: (any | string)[] = [
	[all, allClick, '전체', 'all'],
	[tshirts, tshirtsClick, '상의', 'tshirts'],
	[outter, outterClick, '아우터', 'outter'],
	[pants, pantsClick, '바지', 'pants'],
	[onepiece, onepieceClick, '원피스', 'onepiece'],
	[skirt, skirtClick, '스커트', 'skirt'],
	[accessory, accessoryClick, '액세서리', 'accessory'],
	[suit, suitClick, '정장', 'suit'],
	[dress, dressClick, '드레스', 'dress'],
];

const Fashion = () => {
	const location = useLocation();
	const [filter, setFilter] = useState<string>('추천순');
	const [currentPage, setCurrentPage] = useState<string>(location.pathname);
	const [category, setCategory] = useState<string>('all');
	const [CardData, setCardData] = useState<CardRes[]>([]);
	const [limit, setLimit] = useState<number>(10);
	const [page, setPage] = useState<number>(1);
	const [categoryModal, setCategoryModal] = useState<boolean>(false);
	const offset = (page - 1) * limit;

	const onClickHander = (e: any) => {
		setFilter(e.target.id);
	};

	const modalRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (e: MouseEvent) => {
		if (modalRef.current && !modalRef.current.contains(e.target as Node)) setCategoryModal(false);
	};

	useEffect(() => {
		window.addEventListener('click', handleClickOutside);
		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	}, []);

	const getData = async () => {
		if (currentPage === '/fashion') {
			const res = await axios.get(
				'http://ec2-54-180-7-198.ap-northeast-2.compute.amazonaws.com:8080/fashionpickup/mainfasionpickup?categoryName=suit&sortWay=views&pageIndex=1'
			);
			setCardData(res.data.data);
		} else if (currentPage === '/funding') {
			const res = await axios.get(
				'http://ec2-54-180-7-198.ap-northeast-2.compute.amazonaws.com:8080/funding/mainPageGet'
			);
			setCardData(res.data.data);
		}
	};

	useEffect(() => {
		setCurrentPage(location.pathname);
	}, [location, currentPage]);
	useEffect(() => {
		getData();
		setPage(1);
	}, [filter, category, currentPage]);
	useEffect(() => {
		setCategory('all');
	}, [location.pathname]);
	const clickHander = (e: any) => {
		setCategory(e.target.id);
	};

	return (
		<ContainerDiv>
			<CategoryDiv>
				{CATEGORY.map((v: (any | string)[], i) => {
					return category === v[3] ? (
						<CategoryItemDiv
							key={i}
							onClick={(e) => clickHander(e)}
							active={true}
							id={v[3]}
							text={v[2]}
							img={v[1]}
						></CategoryItemDiv>
					) : (
						<CategoryItemDiv
							key={i}
							onClick={(e) => clickHander(e)}
							active={false}
							id={v[3]}
							text={v[2]}
							img={v[0]}
						></CategoryItemDiv>
					);
				})}
			</CategoryDiv>
			<TextDiv>
				<SubtitleDiv>새로운 트렌드의 시작 😎</SubtitleDiv>
				<HeadTitleDiv>먼 훗날 유행이 될 최고의 아이템을 찾아보세요.</HeadTitleDiv>
			</TextDiv>

			<SelectDiv>
				<FilterBoxDiv onClick={(e) => onClickHander(e)}>
					{FILTER.map((v, i) => {
						return filter === v ? (
							<FilterItemDiv key={i} id={v} className="selected">
								{v}
							</FilterItemDiv>
						) : (
							<FilterItemDiv key={i} id={v}>
								{v}
							</FilterItemDiv>
						);
					})}
				</FilterBoxDiv>
				<DropBoxDiv>
					<CategorySelectDiv ref={modalRef} onClick={() => setCategoryModal(true)}>
						<span style={{ marginRight: '6px' }}>카테고리 :</span>
						{
							CATEGORY.filter((v) => {
								return v[3] === category;
							})[0][2]
						}
						{categoryModal && (
							<DropCategoryItemBoxDiv>
								{CATEGORY.map((v) =>
									category === v[3] ? (
										<CategoryItemSpan onClick={() => setCategory(v[3])} active={true}>
											{v[2]}
										</CategoryItemSpan>
									) : (
										<CategoryItemSpan onClick={() => setCategory(v[3])}>{v[2]}</CategoryItemSpan>
									)
								)}
							</DropCategoryItemBoxDiv>
						)}
					</CategorySelectDiv>
				</DropBoxDiv>
			</SelectDiv>

			<CardDiv>
				{CardData.slice(offset, offset + limit).map((v, i) => {
					return currentPage === '/fashion' ? (
						<FashionCard data={v}></FashionCard>
					) : (
						<FundingCard data={v}></FundingCard>
					);
				})}
			</CardDiv>
			<Pagination total={CardData?.length} limit={limit} page={page} setPage={setPage} />
		</ContainerDiv>
	);
};

export default Fashion;

const SelectDiv = styled.div`
	display: flex;
	margin-top: 100px;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 30px;
`;
const FilterBoxDiv = styled.div`
	display: flex;
	gap: 20px;
`;
const CategorySelectDiv = styled.div``;
const DropBoxDiv = styled.div`
	font-weight: 600;
	padding-right: 35px;
	display: flex;
`;
const CategoryItemSpan = styled.span<{ active?: boolean }>`
	color: #999999;
	font-weight: 700;
	cursor: pointer;
	${({ active }) => {
		return (
			active &&
			css`
				color: black;
			`
		);
	}};
`;
const DropCategoryItemBoxDiv = styled.div`
	width: 600px;
	height: 70px;
	background-color: #ffffff;
	position: absolute;
	margin-top: 15px;
	right: 5%;
	border-radius: 20px;
	border: 1px solid gray;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;
const DropItemSelect = styled.select`
	border: none;
	margin-right: 30px;
	font-weight: 600;
	font-size: 16px;
`;
const FilterItemDiv = styled.div`
	height: 20px;
	font-weight: 800;
	font-size: 18px;
	color: #999999;
	cursor: pointer;

	&.selected {
		color: black;
		font-weight: 800;
		display: flex;
		flex-direction: column;
		&::after {
			content: {
			}
			position: relative;
			top: 10px;
			border: 1px solid black;
		}
	}
`;
const ContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const HeadTitleDiv = styled.div`
	font-weight: 800;
	font-size: 32px;
	margin-top: 20px;
`;
const CategoryDiv = styled.div`
	margin: 100px 0px;
	height: 100px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px;
	row-gap: 40px;
`;
const CardDiv = styled.section`
	display: grid;

	grid-template-columns: repeat(5, calc(20% - 30px));
	gap: 30px;
	width: 100%;
	justify-content: center;
	@media (max-width: 1800px) {
		grid-template-columns: repeat(4, calc(25% - 30px));
	}
	@media (max-width: 1450px) {
		grid-template-columns: repeat(3, calc(33% - 30px));
	}
	@media (max-width: 1150px) {
		grid-template-columns: repeat(2, calc(50% - 30px));
	}
	@media (max-width: 800px) {
		grid-template-columns: repeat(1, calc(50%));
	}
`;
const CategoryItemDiv = styled.div<{ img: any; text: any; active: boolean }>`
	height: 70px;
	width: 70px;
	background-color: #fdfdfd;
	border: 1px solid #ebebeb;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-image: url(${(props) => props.img});
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 20px;
	&::after {
		content: '${(props) => props.text}';
		text-align: center;
		font-weight: 700;
		margin-top: 100px;
		font-size: 14px;
		color: ${(props) => (props.active ? 'black' : '#999999')};
	}
`;
const SubtitleDiv = styled.div``;
const TextDiv = styled.div`
	text-align: center;

	@media (max-width: 900px) {
		margin: 50px 0px;
	}
	@media (max-width: 550px) {
		margin: 150px 0px;
	}
`;
