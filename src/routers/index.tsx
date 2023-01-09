import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages';
export default function Router() {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}
