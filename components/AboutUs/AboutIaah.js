import {h, Component} from 'preact';

export default class AboutUs extends Component {
 render(){
	 return (
		 <div className='page page-aboutus'>
			<div className='content-aboutus'>
				<img src='/images/pic2.jpg' />
				<h2 className="typl8-gamma">Indian Association for Adolescent Health</h2>
				<p>
					It is a Non-Governmental National Organization of professionals who share the interest in the programs and activities to meet the health care needs of young people all over the country. The goal of the organization is to foster development of regional and state-level associations for promotion of youth and adolescent health. IAAH ensures meaningful youth participation in all its programs and activities. IAAH realizes its role as enhancer of the health of adolescents and youth through education, research and high quality health care. IAAH maintains a multi-disciplinary composition of its members.
				</p>
			</div>
		 </div>
	 );
 }
}