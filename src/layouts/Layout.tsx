import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
export default function Layout() {
	return (
		<>
			<Container>
				<Outlet />
			</Container>
		</>
	);
}

const Container = styled.div`
	width: 90%;
	margin: 50px auto;
`;
