import Navbar from "./Navbar";
import Create from "./Create";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/create">
							<Create />
						</Route>
						<Route path="/contact">Contact</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
