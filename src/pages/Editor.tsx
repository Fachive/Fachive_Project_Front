import { useState, useEffect, MouseEvent, FormEvent } from 'react';
import styled, { css } from 'styled-components';
import { category, category as categoryList } from '../constants/editor';
import { PostInfo } from '../types/fashionPage';
import { CATEGORY } from '../constants/editor';
import axios from 'axios';

const Editor = () => {
	const previewImg: string[] = [CATEGORY[1][0], CATEGORY[2][0], CATEGORY[3][0], CATEGORY[4][0], CATEGORY[5][0]];
	const [fileName, setFileName] = useState<string[]>([]);
	const [currentHashTag, setCurrentHashTag] = useState<string>('');
	const [filePreview, setFilePreview] = useState<string[]>([]);
	const [postInfo, setPostInfo] = useState<PostInfo>({
		postType: '',
		category: '',
		body: '',
		title: '',
		hashTag: [],
		fileImage: [],
	});
	const isVaildForm =
		postInfo.postType !== '' &&
		postInfo.category !== '' &&
		postInfo.body.length > 10 &&
		postInfo.title !== '' &&
		postInfo.fileImage.length >= 1;
	const categorySelcect = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
		setPostInfo((prev) => ({ ...prev, postType: (e.target as HTMLButtonElement).id }));
	};

	const changeTilte = (e: FormEvent<HTMLElement>) => {
		setPostInfo((prev) => ({ ...prev, title: (e.target as HTMLInputElement).value }));
	};

	const changeBody = (e: FormEvent<HTMLElement>) => {
		setPostInfo((prev) => ({ ...prev, body: (e.target as HTMLInputElement).value }));
	};

	const clickHander = (e: React.MouseEvent) => {
		setPostInfo((prev) => ({ ...prev, category: (e.target as HTMLButtonElement).id }));
	};

	const fileAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files as FileList;
		let isDuplication = false;

		// eslint-disable-next-line semi-spacing
		for (let i = 0; i < files.length; i++) {
			// eslint-disable-next-line semi-spacing
			for (let j = 0; j < fileName.length; j++) {
				if (fileName[j] === files[i].name) {
					isDuplication = true;
					break;
				}
			}
			if (!isDuplication) {
				setFileName((prev) => [...prev, files[i].name]);
				setPostInfo((prev) => ({
					...prev,
					fileImage: [...prev.fileImage, files[i]],
				}));
				setFilePreview((prev) => [...prev, URL.createObjectURL(files[i])]);
			}
			isDuplication = false;
		}
	};

	const deleteFile = (index: number) => {
		setPostInfo((prev) => ({ ...prev, fileImage: prev.fileImage.filter((_, i) => i !== index) }));
		setFileName((prev) => prev.filter((_, i) => i !== index));
		setFilePreview((prev) => prev.filter((_, i) => i !== index));
	};

	const hashTagChange = (e: FormEvent<HTMLElement>) => {
		setCurrentHashTag((e.target as HTMLInputElement).value);
	};

	const onKeyPress = (e: any) => {
		if (e.key === 'Enter' || e.key === ' ') {
			if (e.target.value === '') return;
			let HashTag = new Set([...postInfo.hashTag, currentHashTag]);
			setPostInfo((prev) => ({ ...prev, hashTag: [...Array.from(HashTag)] }));
			e.target.value = '';
		}
	};

	const deleteHashTag = (index: number) => {
		setPostInfo((prev) => ({ ...prev, hashTag: prev.hashTag.filter((_, i) => i !== index) }));
	};
	const onEndHandler = async (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
		const userInput = (e.target as HTMLButtonElement).id;
		console.log(userInput);
		if (userInput === 'cancel') {
		} else {
			let data = new FormData();
			data.append('userId', '6');
			data.append('title', postInfo.title);
			data.append('body', postInfo.body);
			data.append('categoryName', postInfo.category);
			// eslint-disable-next-line semi-spacing
			for (let i = 0; i < postInfo.fileImage.length; i++) {
				data.append('multipartFileList', postInfo.fileImage[i]);
			}
			// eslint-disable-next-line semi-spacing
			for (let i = 0; i < postInfo.hashTag.length; i++) {
				data.append('tagList', postInfo.hashTag[i]);
			}
			if (postInfo.postType === 'fashion') {
				await axios.post('https://fachive.kro.kr/fashionpickup/post', data);
			} else {
				await axios.post('https://fachive.kro.kr/portfolio/post', data);
			}
		}
	};

	return (
		<ContainerDiv>
			<TitleSection onChange={(e) => changeTilte(e)}>
				<TitleInput placeholder="제목을 입력하세요.(필수값)"></TitleInput>
			</TitleSection>
			<BodySection>
				<PreviewDiv>
					{filePreview.length > 0 ? (
						filePreview.map((v) => {
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
								return postInfo.postType === v[0] ? (
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

					<PickUpCategoryDiv>
						{CATEGORY.slice(1).map((categoryItem: (any | string)[], i) => {
							return postInfo.category === categoryItem[2] ? (
								<PickUpCategoryItemDiv
									key={i}
									onClick={(e) => clickHander(e)}
									active={true}
									id={categoryItem[2]}
									text={categoryItem[2]}
									img={categoryItem[1]}
								></PickUpCategoryItemDiv>
							) : (
								<PickUpCategoryItemDiv
									key={i}
									onClick={(e) => clickHander(e)}
									active={false}
									id={categoryItem[2]}
									text={categoryItem[2]}
									img={categoryItem[0]}
								></PickUpCategoryItemDiv>
							);
						})}
					</PickUpCategoryDiv>

					<BodyDiv onChange={changeBody}>
						<BodyInput placeholder="내용을 입력하세요.(필수값)"></BodyInput>
					</BodyDiv>
					<HashTagDiv>
						{postInfo.hashTag.length > 0
							? postInfo.hashTag.map((v, i) => {
									return <HashTagItemSpan onClick={() => deleteHashTag(i)}>#{v}</HashTagItemSpan>;
							  })
							: ''}
						<HashTagInput
							onChange={hashTagChange}
							onKeyPress={onKeyPress}
							placeholder="해시태그 입력"
							maxLength={10}
						></HashTagInput>
					</HashTagDiv>

					<UploadDiv>
						{fileName.length > 0 ? (
							fileName.map((v, i) => {
								return (
									<>
										<div style={{ display: 'flex' }}>
											<UploadItem>파일 : {v.length > 30 ? v.slice(0, 30) + '...' : v.slice(0, 30)}</UploadItem>{' '}
											<DeleteButton onClick={() => deleteFile(i)}>X</DeleteButton>
										</div>

										{i === fileName.length - 1 ? '' : <Line></Line>}
									</>
								);
							})
						) : (
							<div style={{ alignItems: 'center', height: '150px', display: 'flex', justifyContent: 'center' }}>
								첨부파일 없음(1개 이상의 파일 첨부 필수)
							</div>
						)}
					</UploadDiv>
					<PlusDiv id="inputFile" type="file" accept="image/*" multiple onChange={fileAdd}></PlusDiv>
					<PlusLabel htmlFor="inputFile">+</PlusLabel>
					<EndSelectDiv onClick={(e) => onEndHandler(e)}>
						<CategoryButton id={'cancel'} raduis={'10px 0px 0px 10px'}>
							취소
						</CategoryButton>
						{isVaildForm ? (
							<CategoryButton id={'submit'} raduis={'0px 10px 10px 0px'}>
								전송
							</CategoryButton>
						) : (
							<CategoryButton
								title="필수값들을 다 입력하시고 눌러주세요"
								id={'submit'}
								raduis={'0px 10px 10px 0px'}
								disabled
							>
								전송
							</CategoryButton>
						)}
					</EndSelectDiv>
				</InfoDiv>
			</BodySection>
		</ContainerDiv>
	);
};

export default Editor;

const PickUpCategoryDiv = styled.div`
	background-color: white;
	margin: 20px 0px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px;
	row-gap: 60px;
	padding-top: 20px;
	padding-bottom: 60px;
`;

const PickUpCategoryItemDiv = styled.div<{ img: string; text: string; active: boolean }>`
	height: 60px;
	width: 60px;
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

const PlusDiv = styled.input`
	display: none;
`;

const ImgDiv = styled.div`
	text-align: center;
	margin-top: 150px;
`;

const HashTagInput = styled.input`
	border: none;
	font-size: 18px;
	margin-bottom: 10px;
	padding-top: 15px;
	width: 120px;

	&:focus {
		outline: none;
		border: none;
	}
`;

const HashTagItemSpan = styled.span`
	border: 1px solid #d1d1d1;
	border-radius: 20px;
	height: 40px;
	text-align: center;
	padding: 10px 10px;
	color: #595959;
	cursor: pointer;
	&:hover {
		border: 1px solid red;
	}
`;
const HashTagDiv = styled.div`
	background-color: white;
	width: 336px;
	margin-top: 15px;
	border-radius: 10px;
	padding: 15px;
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
`;

const DeleteButton = styled.button`
	background-color: white;
	border: none;
	color: gray;
	cursor: pointer;
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

const CategoryButton = styled.button<{ raduis: string; isClickCategory?: boolean }>`
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

const EndSelectDiv = styled.div`
	margin-bottom: 100px;
`;
const CategoryDiv = styled.div``;

const BodySection = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
`;
