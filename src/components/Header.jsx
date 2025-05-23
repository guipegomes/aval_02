import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<h1 class="website-title">The Movie<br/> Archive</h1>
			<nav class="nav-bar">
				<Link to="/">Home</Link>
				<Link to="/create">Create</Link>
				<Link to="/update">Update</Link>
				<Link to="/delete">Delete</Link>
			</nav>
		</header>
	)
}

export default Header;