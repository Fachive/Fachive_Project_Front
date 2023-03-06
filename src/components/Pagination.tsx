import styled from 'styled-components';
interface PageType {
	total: number;
	limit: number;
	page: number;
	setPage: (a: number) => void;
}
function Pagination({ total, limit, page, setPage }: PageType) {
	const numPages = Math.ceil(total / limit);
	console.log(total);
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
				<Button onClick={() => setPage(page + 1)} disabled={total === 0 || total === 1 || numPages === page}>
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
	border-radius: 50px;
	width: 50px;
	height: 50px;
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
		cursor: revert;
		transform: revert;
		color: gray;
		&:hover {
			background: none;
		}
	}

	&[aria-current] {
		background: #67a0ed;
		font-weight: bold;
		cursor: revert;
		color: white;
		transform: revert;
	}
`;

export default Pagination;
