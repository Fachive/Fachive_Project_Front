import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { Home, Fashion, Detail, Login, Sign, Editor } from '../pages';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/detail" element={<Detail />} />
				<Route path="/login" element={<Login />} />
				<Route path="/fashion" element={<Fashion />} />
				<Route path="/funding" element={<Fashion />} />
				<Route path="/newpost" element={<Editor />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/sign" element={<Sign />} />
		</Routes>
	);
};
export default Router;
