import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
export default function Layout() {
	return (
		<>
			<Container>
				<Navbar />
				<LineDiv />
				<Outlet />
			</Container>
		</>
	);
}

const Container = styled.div`
	width: 90%;
	margin: 0px auto;
`;
const LineDiv = styled.div`
	width: calc(100% + 11.5%);
	height: 1px;
	border-top: 1px solid #ebebeb;
	margin: 15px -6%;
`;
