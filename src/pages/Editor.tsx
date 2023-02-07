import { useState, useEffect, MouseEvent, FormEvent } from 'react';
import styled, { css } from 'styled-components';
import { category as categoryList } from '../constants/editor';
import { PostInfo } from '../types/fashionPage';
import { accessory, dress, pants, skirt, suit, tshirts } from '../assets';
const Editor = () => {
	const previewImg: string[] = [accessory, dress, skirt, suit, tshirts, pants];
	const [fileName, setFileName] = useState<string[]>([]);
	const [postInfo, setPostInfo] = useState<PostInfo>({
		category: '',
		body: '',
		title: '',
		hashTag: [],
		fileImage: [],
	});

	const categorySelcect = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
		setPostInfo((prev) => ({ ...prev, category: (e.target as HTMLButtonElement).id }));
	};

	const changeTilte = (e: FormEvent<HTMLElement>) => {
		setPostInfo((prev) => ({ ...prev, title: (e.target as HTMLInputElement).value }));
	};
	const changeBody = (e: FormEvent<HTMLElement>) => {
		setPostInfo((prev) => ({ ...prev, body: (e.target as HTMLInputElement).value }));
	};

	const fileAdd = (e: any) => {
		setFileName((prev) => [...prev, e.target.files[0].name]);
		setPostInfo((prev) => ({
			...prev,
			fileImage: [...prev.fileImage, URL.createObjectURL(e.target.files[0])],
		}));
	};
	const deleteFile = (index: number) => {
		console.log(index);
	};

	useEffect(() => {
		console.log(postInfo);
		console.log(fileName);
	}, [postInfo, fileName]);
	return (
		<ContainerDiv>
			<TitleSection onChange={(e) => changeTilte(e)}>
				<TitleInput placeholder="제목을 입력하세요."></TitleInput>
			</TitleSection>
			<BodySection>
				<PreviewDiv>
					{postInfo.fileImage.length > 0 ? (
						postInfo.fileImage.map((v) => {
							return <PreviewImg src={v} alt=""></PreviewImg>;
						})
					) : (
						<>
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
						</>
					)}
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
					<UploadDiv>
						{fileName.length > 0 ? (
							fileName.map((v, i) => {
								return (
									<div>
										<div style={{ display: 'flex' }}>
											<UploadItem>파일 : {v.length > 30 ? v.slice(0, 30) + '...' : v.slice(0, 30)}</UploadItem>{' '}
											<button onClick={() => deleteFile(i)}>삭제</button>
										</div>

										{i === fileName.length - 1 ? '' : <Line></Line>}
									</div>
								);
							})
						) : (
							<div style={{ alignItems: 'center', height: '150px', display: 'flex', justifyContent: 'center' }}>
								첨부파일을 입력하세요.
							</div>
						)}
					</UploadDiv>
					<PlusDiv id="inputFile" type="file" accept="image/*" onChange={fileAdd}></PlusDiv>
					<PlusLabel htmlFor="inputFile">+</PlusLabel>
					{/* <CategoryDiv>
						<CategoryItemLeftButton>패션픽업</CategoryItemLeftButton>
						<CategoryItemRightButton raduis={'0px 10px 10px 0px'}>포트폴리오</CategoryItemRightButton>
					</CategoryDiv> */}
				</InfoDiv>
			</BodySection>
		</ContainerDiv>
	);
};

const PlusDiv = styled.input`
	display: none;
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
const Line = styled.div`
	border-bottom: 1px solid #ebebeb;
`;
const UploadItem = styled.div`
	margin: 10px 0px;
	padding: 5px 0px;
	font-weight: 600;
	font-size: 12px;
	padding-left: 10px;
	color: #595959;
`;
const UploadDiv = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 336px;
	margin-top: 15px;
	border-radius: 10px;
`;

const PreviewImg = styled.img`
	//object-fit: contain;
	object-fit: cover;
	width: 1000px;
	height: 500px;
`;
const PlusLabel = styled.label`
	width: 50px;
	height: 50px;
	background-color: white;
	border-radius: 50px;
	margin: 30px 0px;
	display: flex;
	justify-content: center;
	font-size: 40px;
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
	padding-top: 20px;
	padding-bottom: 50px;
	display: flex;
	flex-direction: column;
	background-color: white;
	margin-top: 15px;
	border: 1px solid #ebebeb;
	border-radius: 10px;
	align-items: center;
	gap: 15px;
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
	min-height: 100px;
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
