import { async } from 'q';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { fashionPickUpDetailApi } from '../api/api';
import kakao from '../assets/kakao.jpg';
import { useLocation } from 'react-router-dom';

interface fashionPickupDetailData {
	data: detailData;
}
interface detailData {
	title: string;
	s3ImageUriList: Array<string>;
	tagList: Array<string>;
	fashionPickupEntityId: string;
}
const Detail = () => {
	const [image, setImage] = useState<string>('');
	const url = useLocation();
	const { data } = useQuery<fashionPickupDetailData>(
		['get'],
		() => fashionPickUpDetailApi(url.pathname.split('/')[3]),
		{
			refetchOnWindowFocus: false,
		}
	);
	if (typeof data !== 'undefined') {
		console.log(data.data);
	}
	return (
		<section>
			<DetailTitleH3>{data?.data.title}</DetailTitleH3>
			<HashTagBoxDiv>
				{data?.data.tagList.map((tag, i) => {
					return <span key={i}>#{Object.values(tag)}</span>;
				})}
			</HashTagBoxDiv>
			<FlexBoxDiv>
				<PickupImageDiv>
					{data?.data.s3ImageUriList.map((url, i) => {
						return <img key={i} src={url} />;
					})}
					<img src={`${kakao}`} alt="" />
				</PickupImageDiv>
				<PickupTextDiv>
					<ProfileDiv>
						<ProfileImageDiv></ProfileImageDiv>
						<DesignerNameDiv>
							<span>디자이너</span>
							<span>ㅎㅇㅎㅇ</span>
						</DesignerNameDiv>
						<MyPickButton>마이픽</MyPickButton>
					</ProfileDiv>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit magnam enim error impedit officiis! Numquam
						eligendi totam voluptates eaque hic, repellat libero maxime at nulla commodi autem nihil adipisci aperiam?
					</p>
					<p>댓글 8개</p>
					<hr />
					<CommentInputDiv>
						<input type="text" />
						<button>작성</button>
					</CommentInputDiv>
					<CommentBoxDiv>
						<ProfileImageDiv></ProfileImageDiv>
						<CommentDiv>
							<span>김아무개</span>
							<span>
								여기가 댓글 쓰는곳 맞나요? 너무 옷이 이뻐서 댓글을 안쓸수가 없겠더라구요 저 이거 너무 사고싶어서
								펀딩하고싶습니다!
							</span>
						</CommentDiv>
						<ProfileImageDiv></ProfileImageDiv>
						<CommentDiv>
							<span>박아무개</span>
							<span>그러니까요 어떻게 이런걸 생각해 내셨는지 너무 부럽습니다 ㅠㅠ</span>
						</CommentDiv>
					</CommentBoxDiv>
				</PickupTextDiv>
				<PickupButtonDiv>
					<span>아이콘1</span>
					<span>아이콘2</span>
					<span>아이콘3</span>
					<span>아이콘4</span>
				</PickupButtonDiv>
			</FlexBoxDiv>
		</section>
	);
};

export default Detail;

const FlexBoxDiv = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: flex-start;
	width: 100%;
	height: auto;
	div {
		margin-right: 2%;
	}
`;
const DetailTitleH3 = styled.h3``;

const HashTagBoxDiv = styled.div`
	margin-bottom: 1rem;
	span {
		box-sizing: border-box;
		margin-right: 1rem;
		padding: 4px;
		border: 1px solid #ebebeb;
		border-radius: 20px;
		color: #595959;
		font-weight: 700;
		text-align: center;
	}
`;
const PickupImageDiv = styled.div`
	width: 70%;
	img {
		width: 100%;
	}
`;
const PickupTextDiv = styled.div`
	position: sticky;
	top: 20px;
	width: 22%;
`;
const PickupButtonDiv = styled.div`
	position: sticky;
	top: 20px;
	display: flex;
	flex-direction: column;
	width: 4%;
	margin-right: 0;
`;
const ProfileDiv = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 50px;
`;
const ProfileImageDiv = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #d9d9d9;
`;
const DesignerNameDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
`;
const MyPickButton = styled.button`
	width: 35%;
	border: 1px solid gray;
	text-align: center;
	padding: 8px 0;
	border-radius: 5px;
`;
const CommentInputDiv = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	input {
		box-sizing: border-box;
		width: 70%;
		padding: 1rem 0.5rem;
		background-color: #f6f6f6;
		border: none;
		border-radius: 5px;
		font-size: 1rem;
	}
	button {
		width: 25%;
		background-color: #67a0ed;
		color: white;
		border: none;
		border-radius: 5px;
		font-size: 1.05rem;
		font-weight: 600;
	}
`;
const CommentBoxDiv = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	margin: 1.5rem 0;
	width: 100%;
`;
const CommentDiv = styled.div`
	width: 80%;
	margin-left: 1rem;
	margin-bottom: 1rem;
	span:nth-of-type(2n + 1) {
		display: block;
		margin-bottom: 0.7rem;
		font-weight: bold;
	}
`;
