import { h, Component } from 'preact';
import { Link } from 'preact-router';
import './Header.css';
const links=[
	{
		link:'',
		text: 'HOME'
	},
	{
		link:[
			{
				link:'/about/iaah',
				text: 'IAAH'
			},
			{
				link:'/aboutus',
				text: 'ICYAH'
			}
		],
		text: 'ABOUT'
	},
	{
		link:[
			{
				link:'/registration/cancellation',
				text: 'Cancellation'
			},
			{
				link:'/registration/fees',
				text: 'Fees'
			},
		],
		text: 'Registration'
	},
	{
		link:'awards',
		text: 'AWARDS'
	},
	{
		link:'fees',
		text: 'FEES'
	},
	{
		link: 'abstract',
		text: 'Abstract'
	},
	{
		link: 'contactus',
		text: 'Contact Us'
	}
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
				<div className='logos'>
					<div className='logo-icyah box'>
						<img className='logo' src='/images/logo.png' />
					</div>
					<div className='desc-icyah box'>
						<div className='title'>ICYAH 2017</div>
						<div className='desc'>International conference on Youth and Adolescent Health</div>
						<div className='subtitle'>Young Generation: Our Global Edge</div>
						<div className='details'>14th - 16th April | Convention Center, NDMC, New Delhi</div>
					</div>
					<div className='logo-iaah box'>
						<img className='logo-iaah' src='/images/iaahlogo.png' width="162"/>
					</div>
				</div>
				<div className='nav-container'>
					<nav className={'sidebar ' + (this.state.sidebarOpened?'opened':'')}>
						{links.map(item=>{
							if(typeof item.link === 'string'){
								return(
									<Link href={"/"+item.link} onClick={this.closeSideBar.bind(this)} className="link">
										{item.text}
									</Link>
								);
							} else if (item.link instanceof Array) {
								return (
									<div className="link">
										{item.text}
										<div className='sublinks'>
											{item.link.map(subitem=>{
												return(
													<div className='subitem'>
														<Link className='sublink' href={subitem.link}>{subitem.text}</Link>
													</div>
												);
											})}
										</div>
									</div>
								);

							}
						})}
					</nav>
				</div>
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