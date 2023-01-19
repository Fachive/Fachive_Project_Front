import styled from 'styled-components';
import { useState } from 'react';
import category from '../../assets/category.png';

const Fashion = () => {
	const [filter, setFilter] = useState('');

	const onClickHander = (e: any) => {
		console.log(e.target.children);
	};
	return (
		<ContainerDiv>
			<CategoryDiv />
			<TextDiv>
				<SubtitleDiv>새로운 트렌드의 시작 😎</SubtitleDiv>
				<HeadTitleDiv>먼 훗날 유행이 될 최고의 아이템을 찾아보세요.</HeadTitleDiv>
			</TextDiv>

			<SelectDiv>
				<FilterBoxDiv onClick={(e) => onClickHander(e)}>
					<FilterItemButton className="likes">추천순</FilterItemButton>
					<FilterItemButton className="lately">최신순</FilterItemButton>
					<FilterItemButton className="mypick">마이픽</FilterItemButton>
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
const FilterBoxDiv = styled.div``;
const DropBoxDiv = styled.div`
	font-weight: 600;
`;
const DropItemSelect = styled.select`
	border: none;
	margin-right: 30px;
	font-weight: 600;
	font-size: 16px;
`;
const FilterItemButton = styled.button`
	width: 70px;
	height: 20px;
	font-weight: 800;
	font-size: 18px;
	border: none;
	background-color: white;
	cursor: pointer;
	&:active {
		color: green;
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
