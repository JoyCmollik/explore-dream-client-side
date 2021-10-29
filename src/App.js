import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home/Home';
import TourDetail from './Pages/Home/Tours/TourDetail';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Redirect exact from='/' to='/home' />
					<Route path='/home'>
						<Home />
					</Route>
					<PrivateRoute path='/tourdetail/:id'>
						<TourDetail />
					</PrivateRoute>
					<Route path='/login'>
						<Login />
					</Route>
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;
