import styled from 'styled-components';
import { useEffect, useState } from 'react';
import category from '../../assets/category.png';

const Fashion = () => {
	const FILTER = ['추천순', '최신순', '마이픽'];
	const [filter, setFilter] = useState('추천순');
	const onClickHander = (e: any) => {
		setFilter(e.target.id);
	};
	useEffect(() => {
		console.log(filter, 'useEffect');
	}, [filter]);
	return (
		<ContainerDiv>
			<CategoryDiv />
			<TextDiv>
				<SubtitleDiv>새로운 트렌드의 시작 😎</SubtitleDiv>
				<HeadTitleDiv>먼 훗날 유행이 될 최고의 아이템을 찾아보세요.</HeadTitleDiv>
			</TextDiv>

			<SelectDiv>
				<FilterBoxDiv onClick={(e) => onClickHander(e)}>
					{FILTER.map((v) => {
						return filter === v ? (
							<FilterItemDiv id={v} className="selected">
								{v}
							</FilterItemDiv>
						) : (
							<FilterItemDiv id={v}>{v}</FilterItemDiv>
						);
					})}
				</FilterBoxDiv>
				<DropBoxDiv>
					계절:
					<DropItemSelect>
						<option value="">전체</option>
						<option value="봄">봄</option>
						<option value="여름">여름</option>
						<option value="가을">가을</option>
						<option value="겨울">겨울</option>
					</DropItemSelect>
					카테고리:
					<DropItemSelect>
						<option value="">전체</option>
						<option value="봄">봄</option>
						<option value="여름">여름</option>
						<option value="가을">가을</option>
						<option value="겨울">겨울</option>
					</DropItemSelect>
				</DropBoxDiv>
			</SelectDiv>
		</ContainerDiv>
	);
};

export default Fashion;

const SelectDiv = styled.div`
	display: flex;
	margin-top: 100px;
	justify-content: space-between;
	width: 100%;
`;
const FilterBoxDiv = styled.div`
	display: flex;
	gap: 20px;
`;
const DropBoxDiv = styled.div`
	font-weight: 600;
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
			content: '';
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
	width: 1100px;
	background-image: url(${category});
	background-repeat: no-repeat;
	background-position: center;
`;
const SubtitleDiv = styled.div``;
const TextDiv = styled.div`
	text-align: center;
`;
