import { async } from 'q';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { fashionPickUpDetailApi, fashionPickUpDetailApi22 } from '../api/api';
import detail1 from '../assets/detail1.png';
import detail2 from '../assets/detail2.png';
import detail3 from '../assets/detail3.png';
import detail4 from '../assets/detail4.png';
import detail5 from '../assets/detail5.png';
const Detail = () => {
	const [image, setImage] = useState<string>('');
	const id = '1';
	// const handleData = async () => {
	// 	const data = await fashionPickUpDetailApi('1');
	// 	const dataList = data.data;
	// 	console.log(dataList.postImageDtoList[0]);
	// 	setImage(dataList.postImageDtoList[0].fileURI);
	// };
	const { data } = useQuery(['get', id], () => fashionPickUpDetailApi(id), { refetchOnWindowFocus: false });
	console.log(data);
	return (
		<section>
			<DetailTitleH3>화이트 패턴 시스루 원피스</DetailTitleH3>
			<HashTagBoxDiv>
				<span>#원피스 </span>
				<span>#데이트룩</span>
				<span>#파티</span>
				<span>#여름코디</span>
				<span>#시스루</span>
			</HashTagBoxDiv>
			<FlexBoxDiv>
				<PickupImageDiv>
					<img src={`${image}`} alt="" />
					<img src={`${detail1}`} alt="" />
					<img src={`${detail2}`} alt="" />
					<img src={`${detail3}`} alt="" />
					<img src={`${detail4}`} alt="" />
					<img src={`${detail5}`} alt="" />
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
					<input type="text" /> <button>작성</button>
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
	width: 100%;
	div {
		margin-right: 2%;
	}
`;
const DetailTitleH3 = styled.h3``;

const HashTagBoxDiv = styled.div`
	span {
		box-sizing: border-box;
		margin-right: 1rem;
		padding: 4px;
		border: 1px solid #ebebeb;
		border-radius: 20px;
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
	width: 22%;
`;
const PickupButtonDiv = styled.div`
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
	background-color: gray;
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
