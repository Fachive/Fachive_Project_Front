import styled from 'styled-components';
import { useEffect, useState } from 'react';
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
const FILTER = ['추천순', '최신순', '마이픽'];
const CATEGORY: any = [
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

interface CategoryDiv {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => React.MouseEvent<HTMLButtonElement>;
}
const Fashion = () => {
	const [filter, setFilter] = useState('추천순');
	const [category, setCategory] = useState('all');
	const onClickHander = (e: any) => {
		setFilter(e.target.id);
	};
	useEffect(() => {
		console.log(filter, 'useEffect');
		console.log(category, 'useEffect');
	}, [filter, category]);
	const clickHander = (e: any) => {
		console.log(e.target.id);
		setCategory(() => e.target.id);
	};
	return (
		<ContainerDiv>
			<CategoryDiv onClick={(e) => clickHander(e)}>
				{CATEGORY.map((v: any) => {
					return category === v[3] ? (
						<CategoryItemDiv active={true} id={v[3]} text={v[2]} img={v[1]}></CategoryItemDiv>
					) : (
						<CategoryItemDiv active={false} id={v[3]} text={v[2]} img={v[0]}></CategoryItemDiv>
					);
				})}
			</CategoryDiv>
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
	width: 1100px;
	display: flex;
	background-repeat: no-repeat;
	background-position: center;
	justify-content: center;
	gap: 20px;
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
`;
