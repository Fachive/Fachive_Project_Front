import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { Home, Fashion, Detail, Login, Sign, Editor, Portfolio } from '../pages';
import Profile from '../pages/Profile';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/fashion/detail/:id" element={<Detail />} />
				<Route path="/funding/detail/:id" element={<Detail />} />

				<Route path="/login" element={<Login />} />
				<Route path="/fashion" element={<Fashion />} />
				<Route path="/funding" element={<Fashion />} />
				<Route path="/newpost" element={<Editor />} />
				<Route path="/portfolio" element={<Portfolio />} />

				<Route path="/profile" element={<Profile />}></Route>
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/sign" element={<Sign />} />
		</Routes>
	);
};
export default Router;
