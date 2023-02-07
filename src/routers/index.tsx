import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { Home, Fashion, Detail, Login, Sign } from '../pages';
import Profile from '../pages/Profile';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/detail" element={<Detail />} />
				<Route path="/login" element={<Login />} />
				<Route path="/fashion" element={<Fashion />} />
				<Route path="/funding" element={<Fashion />} />
				<Route path="/profile" element={<Profile />}></Route>
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/sign" element={<Sign />} />
		</Routes>
	);
};
export default Router;
