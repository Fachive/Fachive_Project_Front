import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';

import { Home, Fashion } from '../pages';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/fashion" element={<Fashion />} />
			</Route>
		</Routes>
	);
};
export default Router;
