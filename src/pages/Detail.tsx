import React from 'react';
import styled from 'styled-components';
import detail1 from '../assets/detail1.png';
import detail2 from '../assets/detail2.png';
import detail3 from '../assets/detail3.png';
import detail4 from '../assets/detail4.png';
import detail5 from '../assets/detail5.png';

const Detail = () => {
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
			<div>
				<div>
					<img src={`${detail1}`} alt="" />
					<img src={`${detail2}`} alt="" />
					<img src={`${detail3}`} alt="" />
					<img src={`${detail4}`} alt="" />
					<img src={`${detail5}`} alt="" />
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit magnam enim error impedit officiis! Numquam
					eligendi totam voluptates eaque hic, repellat libero maxime at nulla commodi autem nihil adipisci aperiam?
				</div>
				<div>
					<span>아이콘1</span>
					<span>아이콘2</span>
					<span>아이콘3</span>
					<span>아이콘4</span>
				</div>
			</div>
		</section>
	);
};

export default Detail;

const FlexBoxDiv = styled.div`
	display: flex;
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
