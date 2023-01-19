import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../assets/Logo.png';

const Navbar = () => {
	return (
		<Container>
			<NavContainerDiv>
				<LogoSpan></LogoSpan>
				<NavItemSpan>
					<StyledLink to="/fashion">패션픽업</StyledLink>
				</NavItemSpan>
				<NavItemSpan>
					<StyledLink to="/funding">펀딩</StyledLink>
				</NavItemSpan>
				<NavItemSpan>
					<StyledLink to="/portfolio">포트폴리오</StyledLink>
				</NavItemSpan>
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
const StyledLink = styled(Link)`
	text-decoration-line: none;
	color: black;
`;
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
const NavItemSpan = styled.span`
	color: black;
	text-decoration-line: none;
`;
const UserContainerDiv = styled.div`
	display: flex;
	gap: 15px;
	padding-right: 20px;
`;
const UserItemDiv = styled.span``;
