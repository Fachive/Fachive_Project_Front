import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';

import axios from 'axios';
import FashionCard from '../../components/FashionCard';
import Pagination from '../../components/Pagination';
import { useLocation } from 'react-router-dom';
import { CardRes } from '../../types/fashionPage';
import Masonry from 'react-masonry-css';
const Portfolio = () => {
	const location = useLocation();
	const [currentPage, setCurrentPage] = useState<string>(location.pathname);
	const [CardData, setCardData] = useState<CardRes[]>([]);
	const [limit, setLimit] = useState<number>(10);
	const [page, setPage] = useState<number>(1);
	const offset = (page - 1) * limit;

	const getData = async () => {
		const res = await axios.get('https://fachive.kro.kr/portfolio/auth/mainportfolio');
		setCardData(res.data);
	};

	useEffect(() => {
		setCurrentPage(location.pathname);
	}, [location, currentPage]);

	useEffect(() => {
		getData();
		setPage(1);
	}, [currentPage, limit]);

	return (
		<ContainerDiv>
			{CardData.length === 0 ? (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						fontSize: '30px',
						marginBottom: '30px',
						fontWeight: '700',
					}}
				>
					데이터가 없습니다
				</div>
			) : (
				<Masonry breakpointCols={5} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
					{CardData.slice(offset, offset + limit).map((v, i) => {
						return <FashionCard data={v}></FashionCard>;
					})}
				</Masonry>
			)}
			<PageDiv>
				<Pagination total={CardData?.length} limit={limit} page={page} setPage={setPage} />
				<PageLimit>
					페이지당 게시글 수
					<select value={limit} onChange={(e) => setLimit(+(e.target as HTMLSelectElement).value)}>
						10
						<option value="10">10</option>
						<option value="20">20</option>
						<option value="30">30</option>
						<option value="40">40</option>
						<option value="50">50</option>
					</select>
				</PageLimit>
			</PageDiv>
		</ContainerDiv>
	);
};

export default Portfolio;

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
const PageDiv = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 100px;

	select {
		margin-left: 10px;
		padding: 5px 0px 5px 5px;
		border-radius: 5px;
		border: 1px solid #999999;
		color: #999999;
	}
`;
const PageLimit = styled.div`
	position: absolute;
	right: 10%;
	color: #999999;
	@media (max-width: 700px) {
		display: none;
	}
`;
const CategorySelectDiv = styled.div``;
const DropBoxDiv = styled.div`
	font-weight: 600;
	padding-right: 35px;
	display: flex;
	@media (max-width: 700px) {
		display: none;
	}
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
	padding-top: 30px;
	flex-direction: column;
	align-items: center;
	min-width: 420px;
`;
const HeadTitleDiv = styled.div`
	font-weight: 800;
	font-size: 32px;
	margin-top: 20px;
`;
const CategoryDiv = styled.div`
	margin: 100px 0px;
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
const CategoryItemDiv = styled.div<{ img: string; text: string; active: boolean }>`
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
		display: none;
	}
`;
