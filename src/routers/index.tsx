import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages';
const Router = () => {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
};
export default Router;
