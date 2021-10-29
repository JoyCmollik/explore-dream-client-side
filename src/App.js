import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Redirect exact from='/' to='/home' />
					<Route path='/home'>
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
