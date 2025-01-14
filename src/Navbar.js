import { Link } from "react-router-dom/cjs/react-router-dom";


const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to='/'>
				<h1>The Dojo Blog</h1>
			</Link>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create" style={{
					backgroundColor: "blue",
					color: "white",
					borderRadius: "8px"
				}}>New Blog</Link>
			</div>
		</nav>
	);
}

export default Navbar;