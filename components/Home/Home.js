import {h, Component} from 'preact';
import './Home.css'

export default class Home extends Component {
 render(){
	 return (
		 <div className='page page-home'>
			<div class='mobCover'></div>
			<div className='content-home'>
				<h1 className="typl8-gamma">International Conference on Youth and Adolescent Health 2017</h1>
				<p>
					<div><strong>Theme: </strong> Young Generation: Our Global Edge</div>
					<div><strong>Date: </strong> 9th -11th Mar, 2017</div>
					<div><strong>Venue: </strong> Convention Centre, New Delhi Municipal Council, Parliament Street, New Delhi, India </div>
				</p>
				<h2 className='head typl8-delta'>
					Indian Association for Adolescent Health
				</h2>
				<p>
					in collaboration with New Delhi Municipal Council
					National University of Educational Planning & Administration,
					Indian Association of Public Health-Delhi State Branch (IPHA-DSB),
					Indian Association of Preventive & Social Medicine-Delhi (IAPSM-DSB),
					National Institute of Health & Family Welfare (NIHFW),
					Vardhaman Mahavir Medical College (VMMC) & Safdarjung Hospital, Delhi,
					All India Institute of Medical Sciences (AIIMS),
					Hamdard Institute of Medical Sciences & Research (HIMSR)
				</p>
			</div>
		 </div>
	 );
 }
}