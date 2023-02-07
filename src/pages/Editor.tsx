import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { category as categoryList } from '../constants/editor';
import { PostInfo } from '../types/fashionPage';
import { accessory, dress, pants, skirt, suit, tshirts } from '../assets';
const Editor = () => {
	const previewImg: string[] = [accessory, dress, skirt, suit, tshirts, pants];
	const [postInfo, setPostInfo] = useState<PostInfo>({
		category: '',
		body: '',
		title: '',
		hashTag: [],
	});

	const categorySelcect = (e: any) => {
		setPostInfo((prev) => ({ ...prev, category: e.target.id }));
	};

	const changeTilte = (e: any) => {
		setPostInfo((prev) => ({ ...prev, title: e.target.value }));
	};
	const changeBody = (e: any) => {
		setPostInfo((prev) => ({ ...prev, body: e.target.value }));
	};
	useEffect(() => {
		console.log(postInfo);
	}, [postInfo]);
	return (
		<ContainerDiv>
			<TitleSection onChange={changeTilte}>
				<TitleInput placeholder="제목을 입력하세요."></TitleInput>
			</TitleSection>
			<BodySection>
				<PreviewDiv>
					<ImgDiv>
						{previewImg.map((v: string) => {
							return <img src={v} alt="" width="100px" height="100px" />;
						})}
					</ImgDiv>
					<TextDiv>
						아직 게시물에 올라온 미리보기 사진이 없습니다. <br />
						<br />
						(사진 가로 최대 1200px / 4:3 비율 권장)
					</TextDiv>
				</PreviewDiv>
				<InfoDiv>
					<CategoryDiv onClick={(e) => categorySelcect(e)}>
						<>
							{categoryList.map((v) => {
								return postInfo.category === v[0] ? (
									<CategoryButton isClickCategory={true} id={v[0]} raduis={v[2]}>
										{v[1]}
									</CategoryButton>
								) : (
									<CategoryButton isClickCategory={false} id={v[0]} raduis={v[2]}>
										{v[1]}
									</CategoryButton>
								);
							})}
						</>
					</CategoryDiv>
					<BodyDiv onChange={changeBody}>
						<BodyInput placeholder="내용을 입력하세요."></BodyInput>
					</BodyDiv>
					<HashTagDiv>해쉬태크를 입력하세요</HashTagDiv>
					<UploadDiv>첨부파일을 입력하세요.</UploadDiv>
					<PlusDiv>+</PlusDiv>
					{/* <CategoryDiv>
						<CategoryItemLeftButton>패션픽업</CategoryItemLeftButton>
						<CategoryItemRightButton raduis={'0px 10px 10px 0px'}>포트폴리오</CategoryItemRightButton>
					</CategoryDiv> */}
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
const ImgDiv = styled.div`
	text-align: center;
	margin-top: 150px;
`;

const ContainerDiv = styled.div`
	width: calc(100% + 11.5%);
	background-color: #f6f6f6;
	margin: 0px -5.5%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
const TextDiv = styled.div`
	text-align: center;
	color: #999999;
`;

const TitleSection = styled.section`
	width: 1720px;
	height: 60px;
	border: 1px solid #ebebeb;
	border-radius: 10px;
	margin-top: 1%;
	background-color: white;
	z-index: 10;
	padding-bottom: 15px;
`;

const TitleInput = styled.input`
	margin-top: 15px;
	width: 99%;
	height: 30px;
	margin-left: 15px;
	border: none;
	font-weight: 700;
	font-size: 16px;
	&:focus {
		outline: none;
		border: none;
	}

	&::placeholder {
		font-weight: 400;
		font-size: 16px;
		color: #999999;
	}
	z-index: -1;
`;

const PreviewDiv = styled.div`
	width: 1374px;

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

const CategoryButton = styled.button<{ raduis: string; isClickCategory: boolean }>`
	width: 168px;
	height: 50px;
	border: 1px solid #ebebeb;
	background-color: white;
	border-radius: ${(props) => props.raduis};

	${({ isClickCategory }) =>
		isClickCategory &&
		css`
			font-weight: 600;
			border: 1px solid black;
		`}
`;

const CategoryDiv = styled.div``;

const BodySection = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
`;
export default Editor;
