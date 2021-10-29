import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import TourDetail from './Pages/Home/Tours/TourDetail';
import Login from './Pages/Login/Login';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Redirect exact from='/' to='/home' />
					<Route path='/home'>
						<Home />
					</Route>
					<Route path='/tourdetail/:id'>
						<TourDetail />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
