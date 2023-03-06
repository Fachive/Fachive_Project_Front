import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../assets/Logo.png';
import { NAV_ITEM } from '../constants/editor';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Navbar = () => {
	const location = useLocation();
	const nav = useNavigate();

	const [isLogin, setIsLogin] = useState(false);
	useEffect(() => {
		if (sessionStorage.getItem('token') !== null) {
			setIsLogin(true);
		}
	}, []);

	function logoutHandler() {
		setIsLogin(false);
		sessionStorage.removeItem('displayName');
		sessionStorage.removeItem('email');
		sessionStorage.removeItem('token');
		nav('/');
	}
	return (
		<Container>
			<NavContainerDiv>
				<Link to="/">
					<LogoSpan src={LogoImg}></LogoSpan>
				</Link>
				<NavItemDiv>
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
				</NavItemDiv>
			</NavContainerDiv>
			<UserContainerDiv>
				{isLogin ? (
					<div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
						<WritePostButton onClick={() => nav('/newpost')}>게시글 작성하기</WritePostButton>
						<UserDropBoxDiv></UserDropBoxDiv>
						<UserItemDiv onClick={logoutHandler}>로그아웃</UserItemDiv>
					</div>
				) : (
					<>
						<Link style={{ textDecorationLine: 'none', color: 'black' }} to="/login">
							<UserItemDiv>로그인</UserItemDiv>
						</Link>
						<Link style={{ textDecorationLine: 'none', color: 'black' }} to="/sign">
							<UserItemDiv>회원가입</UserItemDiv>
						</Link>
					</>
				)}
			</UserContainerDiv>
			<></>

		</Container>
	);
};

export default Navbar;

const UserDropBoxDiv = styled.div`
	width: 30px;
	height: 30px;
	background-color: #d9d9d9;
	border-radius: 30px;
`;

const WritePostButton = styled.button`
	background-color: white;
	border: 1px solid #cacaca;
	cursor: pointer;
	color: #999999;
	font-size: 13px;
	font-weight: 700;
	padding: 15px;
	border-radius: 30px;
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

const StyledLink = styled(NavLink)`
	text-decoration-line: none;
	color: #999999;
	&.selected {
		font-weight: 800;
		display: flex;
		flex-direction: column;
		color: black;
		@media (min-width: 550px) {
			&::after {
				content: '';
				position: relative;
				top: 10px;
				border: 1px solid black;
			}
		}
	}
`;

const LogoSpan = styled.img`
	height: 25px;
	width: 200px;
	background-repeat: no-repeat;
	margin-right: 50px;
`;

const NavContainerDiv = styled.div`
	display: flex;
	gap: 15px;
	align-items: center;
	@media (max-width: 550px) {
		display: block;
	}
`;

const NavItemDiv = styled.div`
	display: flex;
	gap: 15px;
	margin: 5px 0px;
`;

const NavItemSpan = styled.span`
	color: black;
	text-decoration-line: none;
`;

const UserContainerDiv = styled.div`
	display: flex;
	gap: 15px;
	padding-right: 20px;
	a {
		text-decoration: none;
		color: black;
	}
	@media (max-width: 710px) {
		display: none;
	}
`;
const UserItemDiv = styled.span`
	cursor: pointer;
	color: #999999;
	font-size: 16px;
	font-weight: 700;
`;

