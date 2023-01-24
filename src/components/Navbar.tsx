import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../assets/Logo.png';
const NAV_ITEM = [
	['/fashion', '패션픽업'],
	['/funding', '펀딩'],
	['/portfolio', '포트폴리오'],
];
const Navbar = () => {
	const location = useLocation();

	return (
		<Container>
			<NavContainerDiv>
				<LogoSpan></LogoSpan>
				{NAV_ITEM.map((v, i) => {
					return (
						<NavItemSpan key={i}>
							{location.pathname === v[0] ? (
								<StyledLink to={`${v[0]}`} className="selected">
									{v[1]}
								</StyledLink>
							) : (
								<StyledLink to={`${v[0]}`}>{v[1]}</StyledLink>
							)}
						</NavItemSpan>
					);
				})}
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
const StyledLink = styled(NavLink)`
	text-decoration-line: none;
	color: #999999;

	&.selected {
		font-weight: 800;
		display: flex;
		flex-direction: column;
		color: black;
		&::after {
			content: '';
			position: relative;
			top: 18px;
			border: 1px solid black;
		}
	}
`;
const Container = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #999999;
	font-size: 16px;
	font-weight: 700;
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
