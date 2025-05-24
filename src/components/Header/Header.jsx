import { Link } from "react-router-dom";
import './Header.scss';

function Header() {
	const today = new Date();

  const formattedDate = today.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

	return (
		<header>
			<p className="date-section">
        {formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
      </p>
			<h1 class="website-title">The Movie Archive</h1>
			<nav class="nav-bar">
				<div className="links">
					<Link className="link" to="/">News</Link>
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