import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Login from '../pages/auth/Login';
import Sign from '../pages/auth/Sign';
import Detail from '../pages/Detail';
import Login from '../pages/auth/Login';
import { Home, Fashion } from '../pages';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/detail" element={<Detail />} />
				<Route path="/login" element={<Login />} />
				<Route path="/fashion" element={<Fashion />} />
				<Route path="/funding" element={<Fashion />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/sign" element={<Sign />} />
		</Routes>
	);
};
export default Router;
