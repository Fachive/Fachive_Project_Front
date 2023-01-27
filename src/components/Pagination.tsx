import styled from 'styled-components';
interface PageType {
	total: number;
	limit: number;
	page: number;
	setPage: any;
}
function Pagination({ total, limit, page, setPage }: PageType) {
	const numPages = Math.ceil(total / limit);

	return (
		<>
			<Nav>
				<Button onClick={() => setPage(page - 1)} disabled={page === 1}>
					&lt;PREV
				</Button>
				{Array(numPages)
					.fill(null)
					.map((_, i) => (
						<Button key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? 'page' : null}>
							{i + 1}
						</Button>
					))}
				<Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
					NEXT&gt;
				</Button>
			</Nav>
		</>
	);
}

const Nav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	margin: 16px;
`;

const Button = styled.button<{ 'aria-current'?: any }>`
	border-radius: 100px;
	width: 60px;
	height: 60px;
	padding: 8px;
	margin: 0;
	background: white;
	color: black;
	font-size: 15px;
	border: none;
	&:hover {
		background: skyblue;
		cursor: pointer;
		transform: translateY(-2px);
	}

	&[disabled] {
		background: grey;
		cursor: revert;
		transform: revert;
	}

	&[aria-current] {
		background: skyblue;
		font-weight: bold;
		cursor: revert;
		transform: revert;
	}
`;

export default Pagination;
