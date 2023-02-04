import styled from 'styled-components';

const Editor = () => {
	return (
		<ContainerDiv>
			<TitleSection>
				<TitleInput placeholder="제목을 입력하세요."></TitleInput>
			</TitleSection>
			<BodySection>
				<PreviewDiv></PreviewDiv>
				<InfoDiv>
					<CategoryDiv>
						<CategoryItemLeftButton>패션픽업</CategoryItemLeftButton>
						<CategoryItemRightButton>포트폴리오</CategoryItemRightButton>
					</CategoryDiv>
					<BodyDiv>
						<BodyInput placeholder="내용을 입력하세요."></BodyInput>
					</BodyDiv>
					<HashTagDiv>해쉬태크를 입력하세요</HashTagDiv>
					<UploadDiv>첨부파일을 입력하세요.</UploadDiv>
					<PlusDiv>+</PlusDiv>
					<CategoryDiv>
						<CategoryItemLeftButton>패션픽업</CategoryItemLeftButton>
						<CategoryItemRightButton>포트폴리오</CategoryItemRightButton>
					</CategoryDiv>
				</InfoDiv>
			</BodySection>
		</ContainerDiv>
	);
};

const PlusDiv = styled.div`
	width: 50px;
	height: 50px;
	background-color: white;
	border-radius: 50px;
	margin: 30px 0px;
	display: flex;
	justify-content: center;
	font-size: 40px;
`;

const ContainerDiv = styled.div`
	width: calc(100% + 11.5%);
	background-color: #f6f6f6;
	margin: 0px -5.5%;
	height: calc(100vh - 80px);
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const TitleSection = styled.section`
	width: 1720px;
	height: 60px;
	border: 1px solid #ebebeb;
	border-radius: 10px;
	margin-top: 1%;
	background-color: white;
	z-index: 10;
`;

const TitleInput = styled.input`
	margin-top: 20px;
	margin-left: 15px;
	border: none;
	&:focus {
		outline: none;
		border: none;
	}

	&::placeholder {
		color: #999999;
		font-weight: 400;
		font-size: 16px;
	}
	z-index: -1;
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
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const BodyDiv = styled.div`
	min-width: 336px;
	min-height: 300px;
	border: 1px solid #ebebeb;
	border-radius: 10px;
	margin-top: 15px;
	max-width: 336px;
	max-height: 400px;
	background-color: white;
	padding-top: 20px;
	padding-left: 10px;
	&:focus {
		outline: 1px solid #ebebeb;
	}
`;

const UploadDiv = styled.div`
	background-color: white;
	width: 336px;
	height: 100px;
	margin-top: 15px;
	border-radius: 10px;
`;
const BodyInput = styled.textarea`
	border: none;
	resize: none;
	min-width: 300px;
	min-height: 250px;
	&:focus {
		outline: none;
	}
`;

const HashTagDiv = styled.div`
	background-color: white;
	width: 336px;
	height: 100px;
	margin-top: 15px;
	border-radius: 10px;
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
