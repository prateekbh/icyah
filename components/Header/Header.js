import { h, Component } from 'preact';
import { Link } from 'preact-router';
import './Header.css';
export default class Header extends Component{
	render(){
		return (
			<header>
				<nav className='desktop'>
					<div className="logo link">
						LOGO
					</div>
					<Link href='/' className="link boldFont">
						HOME
					</Link>
					<Link href='/sponsors/' className="link boldFont">
						SPONSORS
					</Link>
					<Link href='/partners/' className="link boldFont">
						PARTNERS
					</Link>
					<Link href='/awards/' className="link boldFont">
						AWARDS
					</Link>
					<Link href='/contactus/' className="link boldFont">
						CONTACT US
					</Link>
				</nav>
			</header>

		);
	}
};