import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateBlog from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
// import { useState } from 'react';
// import MyApp from './MyApp';



function App() {
  return (
	<Router>
		<div className="App">
			{/* <MyApp /> */}
			<Navbar />
			<div className="content">
				<Switch>
					<Route exact path="/">
						<Home/>
					</Route>
					<Route path="/create">
						<CreateBlog />
					</Route>
					<Route path="/blogs/:id">
						<BlogDetails />
					</Route>
					<Route path="*">
						<NotFound/>
					</Route>
				</Switch>
			</div>
		</div>
	</Router>
  );
}

export default App;
