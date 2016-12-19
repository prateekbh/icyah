import { h, Component } from 'preact';
import { Link } from 'preact-router';
import './Header.css';
const links=[
	{
		link:'',
		text: 'HOME'
	},
	{
		link:'sponsors',
		text: 'SPONSORS'
	},
	{
		link:'partners',
		text: 'PARTNERS'
	},
	{
		link:'awards',
		text: 'AWARDS'
	},
	{
		link:'contactus',
		text: 'CONTACT US'
	},
];
export default class Header extends Component{
	constructor() {
		super();
		this.state = {
			sidebarOpened: false
		};
	}

	toggleSideBar(){
		this.setState({
			sidebarOpened: !this.state.sidebarOpened
		});
	}

	closeSideBar(){
		console.log('hi');
		this.setState({
			sidebarOpened: false
		});
	}

	render(){
		return (
			<header>
				<nav className={'sidebar ' + (this.state.sidebarOpened?'opened':'')}>
					<div className="logo link">
						LOGO
					</div>
					{links.map(item=>{
						return(
							<div onClick={this.closeSideBar.bind(this)}>
								<Link href={"/"+item.link} className="link boldFont">
									{item.text}
								</Link>
							</div>
						);
					})}
				</nav>
				<i className='sidebar-switch' onClick={this.toggleSideBar.bind(this)}>
					<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
							<path d="M0 0h24v24H0z" fill="none"/>
							<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
					</svg>
				</i>
			</header>

		);
	}
};