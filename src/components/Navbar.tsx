import styled from 'styled-components';
import LogoImg from '../assets/Logo.png';

const Navbar = () => {
	return (
		<Container>
			<NavContainerDiv>
				<LogoSpan />
				<NavItemDiv>패션픽업</NavItemDiv>
				<NavItemDiv>펀딩</NavItemDiv>
				<NavItemDiv>포트폴리오</NavItemDiv>
			</NavContainerDiv>
			<UserContainerDiv>
				<UserItemDiv>로그인</UserItemDiv>
				<UserItemDiv>로그아웃</UserItemDiv>
			</UserContainerDiv>
			<></>
		</Container>
	);
};
export default Navbar;
const Container = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #999999;
	font-size: 16px;
	font-weight: 700;
	margin-bottom: 15px;
`;
const LogoSpan = styled.span`
	height: 25px;
	width: 200px;
	background-repeat: no-repeat;
	background-image: url(${LogoImg});
	margin-right: 50px;
`;
const NavContainerDiv = styled.div`
	display: flex;
	gap: 15px;
`;
const NavItemDiv = styled.div``;
const UserContainerDiv = styled.div`
	display: flex;
	gap: 15px;
	padding-right: 20px;
`;
const UserItemDiv = styled.div``;
