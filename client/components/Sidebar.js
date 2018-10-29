import React from 'react'

const Sidebar = () => {
	return (
		<section id="header">
			<header>
				<span className="image avatar"><img src="images/avatar.jpg" alt="" /></span>
				<h1 id="logo"><a href="#">Daryl Concha</a></h1>
				<p>Short description about myself<br />
					and now I'm totally cray</p>
			</header>
			<nav id="nav">
				<ul>
					<li><a href="#one" className="active">About</a></li>
					<li><a href="#two">Projects</a></li>
					<li><a href="#three">Skills</a></li>
					<li><a href="#four">Things I Can Do</a></li>
					<li><a href="#five">Contact</a></li>
				</ul>
			</nav>
			<footer>
				<ul className="icons">
					<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
					<li><a href="https://www.linkedin.com/in/daryl-concha-7b420225/" className="icon fa-linkedin"><span className="label">Facebook</span></a></li>
					<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
					<li><a href="https://github.com/DC-1680" className="icon fa-github"><span className="label">Github</span></a></li>
					<li><a href="#" className="icon fa-envelope"><span className="label">Email</span></a></li>
				</ul>
			</footer>
		</section>
	)
}
export default Sidebar