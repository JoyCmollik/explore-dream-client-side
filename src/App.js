import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import AddTour from './Pages/AddTour/AddTour';
import Home from './Pages/Home/Home/Home';
import TourDetail from './Pages/Home/Tours/TourDetail';
import Login from './Pages/Login/Login';
import ManageBooking from './Pages/ManageBookings/ManageBooking';
import MyBookings from './Pages/MyBookings/MyBookings';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import { SnackbarProvider } from 'notistack';

function App() {
	return (
		<AuthProvider>
			<SnackbarProvider maxSnack={4}>
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
						<PrivateRoute path='/add-tour'>
							<AddTour />
						</PrivateRoute>
						<PrivateRoute path='/bookings'>
							<MyBookings />
						</PrivateRoute>
						<PrivateRoute path='/manage-bookings'>
							<ManageBooking />
						</PrivateRoute>
					</Switch>
				</Router>
			</SnackbarProvider>
		</AuthProvider>
	);
}

export default App;
