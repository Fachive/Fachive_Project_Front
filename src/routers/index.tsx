import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';

import { Home } from '../pages';
import Login from '../pages/auth/Login';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Route>
		</Routes>
	);
};
export default Router;
