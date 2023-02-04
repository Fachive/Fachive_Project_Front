import styled from 'styled-components';

const Editor = () => {
	return (
		<ContainerDiv>
			<TitleSection>
				<TitleInput></TitleInput>
			</TitleSection>
			<BodySection>
				<PreviewDiv></PreviewDiv>
				<InfoDiv>
					<CategoryDiv>
						<CategoryItemLeftButton>패션픽업</CategoryItemLeftButton>
						<CategoryItemRightButton>포트폴리오</CategoryItemRightButton>
						<BodyDiv placeholder="내용을 입력하세요."></BodyDiv>
					</CategoryDiv>
				</InfoDiv>
			</BodySection>
		</ContainerDiv>
	);
};

const ContainerDiv = styled.div`
	width: calc(100% + 11.5%);
	background-color: #f6f6f6;
	margin: 0px -5.5%;
	height: calc(100vh - 80px);
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const TitleSection = styled.section``;

const TitleInput = styled.input`
	width: 1720px;
	height: 60px;
	border: 1px solid #ebebeb;
	border-radius: 10px;
	margin-top: 1%;
`;

const PreviewDiv = styled.div`
	width: 1374px;
	height: 780px;
	background-color: white;
	margin-top: 15px;
	border: 1px solid #ebebeb;
	border-radius: 10px;
`;
const InfoDiv = styled.div`
	width: 336px;
	height: 780px;
	margin-left: 15px;
	margin-top: 15px;
`;

const BodyDiv = styled.textarea`
	min-width: 336px;
	min-height: 300px;
	border: 1px solid #ebebeb;
	border-radius: 10px;
	margin-top: 15px;
	size: 336px;
	&:focus {
		outline: 1px solid #ebebeb;
	}
`;

const CategoryItemLeftButton = styled.button`
	width: 168px;
	height: 50px;
	border: 1px solid #ebebeb;
	background-color: white;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
`;
const CategoryItemRightButton = styled.button`
	width: 168px;
	height: 50px;
	border: 1px solid #ebebeb;
	background-color: white;
	border-bottom-right-radius: 10px;
	border-top-right-radius: 10px;
`;

const CategoryDiv = styled.div``;

const BodySection = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
`;
export default Editor;
