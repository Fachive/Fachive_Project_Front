import styled from 'styled-components';
import category from '../../assets/category.png';
const Fashion = () => {
	return (
		<ContainerDiv>
			<CategoryDiv />
			<TextDiv>
				<SubtitleDiv>새로운 트렌드의 시작 😎</SubtitleDiv>
				<HeadTitleDiv>먼 훗날 유행이 될 최고의 아이템을 찾아보세요.</HeadTitleDiv>
			</TextDiv>
		</ContainerDiv>
	);
};

const ContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const HeadTitleDiv = styled.div`
	font-weight: 800;
	font-size: 32px;
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
export default Fashion;
