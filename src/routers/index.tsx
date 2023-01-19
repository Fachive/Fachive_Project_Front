import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { Home } from '../pages';
import Login from '../pages/auth/Login';
import Sign from '../pages/auth/Sign';
import Detail from '../pages/Detail';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/detail" element={<Detail />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/sign" element={<Sign />} />
		</Routes>
	);
};
export default Router;
