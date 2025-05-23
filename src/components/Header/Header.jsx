import { Link } from "react-router-dom";
import './Header.scss';

function Header() {
	return (
		<header>
			<h1 class="website-title">The Film<br /> Archive</h1>
			<nav class="nav-bar">
				<div className="links">
					<Link className="link" to="/">Home</Link>
					<div className="dot"></div>
					<Link className="link" to="/create">Create</Link>
					<div className="dot"></div>
					<Link className="link" to="/update">Update</Link>
					<div className="dot"></div>
					<Link className="link" to="/delete">Delete</Link>
				</div>
			</nav>
		</header>
	)
}

export default Header;