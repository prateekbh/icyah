import { h, Component } from 'preact';
import './Header.css';
export default class Header extends Component{
	render(){
		return (
			<header>
				<nav className='desktop'>
					<div className="logo link">
						LOGO
					</div>
					<a href='/' className="link boldFont">
						HOME
					</a>
					<a href='/sponsors' className="link boldFont">
						SPONSORS
					</a>
					<a href='#' className="link boldFont">
						PARTNERS
					</a>
					<a href='#' className="link boldFont">
						AWARDS
					</a>
					<a href='#' className="link boldFont">
						CONTACT US
					</a>
				</nav>
			</header>

		);
	}
};