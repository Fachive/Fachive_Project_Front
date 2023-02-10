import { BrowserRouter } from 'react-router-dom';
import Router from './routers';
import { QueryClientProvider, QueryClient } from 'react-query';
import './style/reset.css';
const queryClient = new QueryClient();
const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</QueryClientProvider>
	);
};

export default App;
