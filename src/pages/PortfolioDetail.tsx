import { async } from 'q';
import React, { useEffect, useState } from 'react';
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components';
import { deleteComment, portfolioPickUpDetailApi, postComment } from '../api/api';
import kakao from '../assets/kakao.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineLike, AiOutlineClose } from 'react-icons/ai';
import { IoMdRefresh } from 'react-icons/io';
import axios from 'axios';
import useInput from '../hooks/useInput';
import { queryClient } from '../App';
interface fashionPickupDetailData {
	data: detailData;
}
interface detailData {
	title: string;
	s3ImageUriList: Array<string>;
	tagList: Array<string>;
	fashionPickupEntityId: string;
	body: string;
	responseCommentDTOList: [commentList];
	userInfo: userInfo;
}
export interface commentList {
	commentId: number;
	postId: number;
	postType: string;
	userId: number;
	commentBody: string;
	commentProfileImageURI: string;
	mypick: number;
}
interface userInfo {
	displayName: string;
	email: string;
	profileImg: string;
	userId: any;
}
const PortfolioDetail = () => {
	// const queryClient = useQueryClient();
	const [image, setImage] = useState<string>('');
	const nav = useNavigate();
	const url = useLocation();
	const [comment, ChangeComment, setComment] = useInput('');
	const { data } = useQuery<fashionPickupDetailData>(
		['get'],
		() => portfolioPickUpDetailApi(url.pathname.split('/')[3]),
		{
			refetchOnWindowFocus: false,
		}
	);
	const likeHander = async () => {
		const res = await axios.post('https://fachive.kro.kr/MyPick/post', {
			entityId: 4,
			userId: 32,
			whatToPick: 'FASHIONPICKUP',
		});
	};
	const location = useLocation();
	const path = location.pathname.includes('fashion')
		? 'FASHIONPICKUP'
		: location.pathname.includes('funding')
		? 'FUNDING'
		: location.pathname.includes('portfolio')
		? 'PORTFOLIO'
		: '';

	const locateNum = Number(location.pathname.split('/')[location.pathname.split('/').length - 1]);
	console.log(locateNum);
	const handleComment = async () => {
		try {
			const lastcomment = await postComment(comment, locateNum, path, data?.data.userInfo.userId * 1);
			// window.location.reload();
		} catch (error) {
			alert('error');
		}
	};

	const handleDeleteComment = async (el: commentList) => {
		try {
			const lastcomment = await deleteComment(el.commentId, path, data?.data.userInfo.userId * 1);
			window.location.reload();
		} catch (error) {
			alert('error');
		}
	};
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
				</PickupImageDiv>
				<PickupTextDiv>
					<ProfileDiv>
						<ProfileImageDiv></ProfileImageDiv>
						<DesignerNameDiv style={{ marginLeft: '10px' }}>
							<span>{data?.data.userInfo.userId}</span>
							<span style={{ fontWeight: '800' }}>{data?.data.userInfo.email}</span>
						</DesignerNameDiv>
						<MyPickButton>마이픽</MyPickButton>
					</ProfileDiv>
					<p style={{ margin: '30px 0px' }}>{data?.data.body}</p>
					<p style={{ fontWeight: '800' }}>댓글 {data?.data.responseCommentDTOList.length}개</p>
					<hr />
					<CommentInputDiv>
						<input
							type="text"
							onChange={(e) => {
								ChangeComment(e);
							}}
						/>
						<button onClick={handleComment}>작성</button>
					</CommentInputDiv>
					<div>
						{data?.data.responseCommentDTOList &&
							data?.data.responseCommentDTOList.map((el) => {
								return (
									<CommentBoxDiv key={el.commentId}>
										<ProfileImageDiv>{<img src={el.commentProfileImageURI}></img>}</ProfileImageDiv>
										<CommentDiv>
											<span>{el.userId}</span>
											<span>{el.commentBody}</span>
										</CommentDiv>
										<DeleteBtn
											onClick={() => {
												handleDeleteComment(el);
											}}
										>
											X
										</DeleteBtn>
									</CommentBoxDiv>
								);
							})}
					</div>
				</PickupTextDiv>
				<PickupButtonDiv>
					<div style={{ textAlign: 'center' }}>
						<PickupItemDiv onClick={() => nav(-1)} style={{ border: '2px solid black' }}>
							<AiOutlineClose style={{ fontSize: '15px', color: 'black', fontWeight: '700' }}></AiOutlineClose>
						</PickupItemDiv>
						<span style={{ fontSize: '15px', color: 'black', fontWeight: '700' }}>나가기</span>
					</div>
					<div style={{ textAlign: 'center' }}>
						<PickupItemDiv onClick={() => likeHander()}>
							<AiOutlineLike size="24" style={{ color: 'gray' }}></AiOutlineLike>
						</PickupItemDiv>
						<span style={{ fontSize: '15px', color: '#999999', fontWeight: '700' }}>좋아요</span>
					</div>

					<div style={{ textAlign: 'center' }}>
						<PickupItemDiv onClick={() => nav('/')}>
							<IoMdRefresh size="24" style={{ color: 'gray' }}></IoMdRefresh>
						</PickupItemDiv>
						<span style={{ fontSize: '13px', color: '#999999', fontWeight: '700' }}>처음으로</span>
					</div>
				</PickupButtonDiv>
			</FlexBoxDiv>
		</section>
	);
};

export default PortfolioDetail;

const PickupItemDiv = styled.div`
	width: 50px;
	height: 50px;
	cursor: pointer;
	border-radius: 30px;
	border: 1px solid #ebebeb;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
	flex-direction: column;
`;

const FlexBoxDiv = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: flex-start;
	width: 100%;
	height: auto;
`;
const DetailTitleH3 = styled.h3`
	display: inline-block;
	font-size: 2.5rem;
	margin: 1rem 0 1.5rem 0;
`;

const HashTagBoxDiv = styled.div`
	margin-top: 30px;
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
	margin-left: 20px;
`;
const PickupButtonDiv = styled.div`
	position: sticky;
	top: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 10%;
	gap: 20px;
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
	/* align-items: flex-start; */
	align-items: center;
	margin: 1.5rem 0;
	width: 100%;
	border-bottom: 1px solid #ddd;
`;
const CommentDiv = styled.div`
	width: calc(85% - 40px);
	margin-left: 1rem;
	margin-bottom: 1rem;
	span:nth-of-type(2n + 1) {
		display: block;
		margin-bottom: 0.7rem;
		font-weight: bold;
	}
`;
const BodyP = styled.p`
	font-size: 1.2rem;
	font-weight: 600;
	margin: 1rem 0;
`;
const DeleteBtn = styled.button`
	width: 10%;
	background-color: #67a0ed;
	color: white;
	border: none;
	border-radius: 5px;
	font-size: 1.05rem;
	font-weight: 600;
	cursor: pointer;
`;
