import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Profile = () => {
	const FILTER = ['패션픽업', '펀딩', '포트폴리오'];
	const [filter, setFilter] = useState<string>('패션픽업');
	const onClickHander = (e: React.MouseEvent) => {
		if ((e.target as HTMLElement).id !== null) {
			setFilter((e.target as HTMLElement).id);
		} else return;
	};
	return (
		<ProfileDiv>
			<UpperPartDiv>
				<ImageDiv></ImageDiv>
			</UpperPartDiv>
			<MiddlePartDiv>
				<MiddleInnerDiv>
					<MiddleTitleDiv>
						<h3>Designer Choi</h3>
						<p>choichoi@naver.com</p>
					</MiddleTitleDiv>
					<MiddlePickDiv>
						<span>패션픽업</span>|<span>패션픽업</span>|<span>패션픽업</span>
					</MiddlePickDiv>
					<MiddleIntroDiv>
						<p>
							한 줄 소개 <br />
							여성복전문 |OO브랜드 디자이너 인턴과정 수료 | OO대학교 디자인과전공
						</p>
					</MiddleIntroDiv>
				</MiddleInnerDiv>
			</MiddlePartDiv>
			<LowerPartDiv>
				<DesignerDescriptDiv>
					<DesignerDescriptTitle>디자이너 프로필</DesignerDescriptTitle>
					<DesignerDescriptBody>
						<br />
						안녕하세요! 여성복 전문으로 디자인 작업하는 ‘Choi’ 입니다! 작업물은 패카이브와 인스타그램에 주로 올리고
						있습니다!<br></br> <br />
						(Insta : Choi_FD_._.) . <br />
						<br />
						2년차 패션 디자이너 . 2022 국제 디지털 패션 콘테스트 여성복 부문 최우수상 수상 제50회 중앙패션디자인콘테스트
						여성복 부문 우수상 수상 한국의류산업학회 패션 콘테스트 장려상 수상
					</DesignerDescriptBody>
				</DesignerDescriptDiv>
				<DesignerPostDiv>
					<SelectDiv>
						<FilterBoxDiv onClick={(e) => onClickHander(e)}>
							{FILTER.map((v, i) => {
								return filter === v ? (
									<div>
										<FilterItemDiv key={i} id={v} className="selected">
											{v}
										</FilterItemDiv>
										<hr style={{ border: '1px solid black' }}></hr>
									</div>
								) : (
									<FilterItemDiv key={i} id={v}>
										{v}
									</FilterItemDiv>
								);
							})}
						</FilterBoxDiv>
					</SelectDiv>
					<hr style={{ border: '', position: 'relative', bottom: '16px' }}></hr>
				</DesignerPostDiv>
			</LowerPartDiv>
		</ProfileDiv>
	);
};

export default Profile;
const SelectDiv = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;
const FilterItemDiv = styled.div`
	height: 20px;
	font-weight: 800;
	font-size: 18px;
	color: #999999;
	cursor: pointer;

	&.selected {
		color: black;
		font-weight: 800;
		display: flex;
		flex-direction: column;
		&::after {
			content: {
			}
			position: relative;
			top: 10px;
			border: 1px solid black;
		}
	}
`;
const FilterBoxDiv = styled.div`
	display: flex;
	gap: 20px;
`;
const ProfileDiv = styled.div``;

const DesignerDescriptDiv = styled.div`
	width: 40%;
	background-color: white;
	height: 300px;
	padding: 0px 15px;
	padding-top: 20px;

	border-radius: 15px;
`;

const DesignerDescriptBody = styled.div``;

const DesignerPostDiv = styled.div`
	width: 80%;
	min-height: 1000px;
	padding-left: 30px;
	padding-top: 40px;
	background-color: white;
	border-radius: 15px;
`;
const DesignerDescriptTitle = styled.div`
	font-weight: 900;
`;
const UpperPartDiv = styled.div`
	width: calc(100% + 11.55%);
	margin: 0px -6%;
	height: calc(33vh - 60px);
	background-color: #f6f6f6;
`;
const MiddlePartDiv = styled.div`
	width: calc(100% + 11.55%);
	margin: 0px -6%;
	background-color: white;
`;
const ImageDiv = styled.div`
	position: relative;
	top: 75%;
	left: 10%;
	margin: 0px -6%;
	width: 180px;
	height: 180px;
	border-radius: 50%;
	border: 5px solid white;
	background-color: #f6f6f6;
`;
const LowerPartDiv = styled.div`
	display: flex;
	gap: 15px;
	width: calc(100% + 11.55%);
	margin: 0px -6%;
	padding: 0px 5%;
	background-color: #f6f6f6;
	padding-top: 15px;
	padding-bottom: 100px;
`;
const MiddleInnerDiv = styled.div`
	box-sizing: border-box;
	width: 60%;
	margin: 0 auto;
	padding: 30px 0;
`;
const MiddleTitleDiv = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	padding: 10px 0;
	h3 {
		font-size: 2rem;
		margin-right: 10pxy;
	}
`;
const MiddlePickDiv = styled.div`
	box-sizing: border-box;
	padding: 10px 0;
`;
const MiddleIntroDiv = styled.div`
	box-sizing: border-box;
	padding: 10px 0;
`;
