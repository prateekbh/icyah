import {h, Component} from 'preact';
import {Link} from 'preact-router';
import './Home.css'

export default class Home extends Component {
 render(){
	 return (
		 <div className='page page-home'>
			<div class='mobCover'>

				<a href='/public/pdf/brochure.pdf' target='_blank' className='link link-brocure'>Brochure</a>
			</div>
			<div className='content-home'>
				<div className='sidepanel'>
					<div className='dates'>
						<div className='title'> Important Dates </div>
						<div className='date'>Registrations open soon.</div>
						<div className='date'>Abstract submissions open.</div>
					</div>
					<div className='venue'>
						<div className='name'> Venue: <div>Convention Hall, NDMC New Delhi</div></div>
						<div>
							<img className='pic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOHCSBJjKJbpX_wj2_x4Lerjx_WiOiNvEg5lKILTKVBHTWDNU'/>
						</div>
					</div>
				</div>
				<div className='content'>
					<div className="typl8-alpha head">Welcome to ICYAH 2017</div>
					<div>Dear Friends and Colleagues,</div>
					<div>It gives us immense pleasure to invite you to the International Conference on Youth &amp;

					Adolescent Health 2017 being organized by Indian Association for Adolescent Health

					(IAAH), which will be held from 9 th to 11 th March, 2016 at NDMC Convention Centre, New

					Delhi, India.</div>

					<div>The theme of the conference is “Young Generation: Our Global Edge”. Globally, 1.2 billion

					adolescents stand at the cross roads of childhood and adulthood. India alone is home to

					243 million adolescents. Investing in adolescents today can break entrenched cycles of

					poverty and inequity (UNICEF, 2011). Thus, it serves an opportunity to transform the

					society by nurturing them properly and tapping the potential of this generation. It is well

					known fact that as adolescents flourish so do their communities. Adolescents in India

					constitute nearly one quarter of the total population of the country thereby making India

					one of the youngest countries in the world. This provides an opportune platform for India

					to take advantage and nurture the adolescence for socio-economic growth of the country.

					The 3 day academic and technical feast will offer ample prospects to discuss important

					issues, sharing information and exchange ideas in the field of adolescence and youth. Your

					active participation and contribution in various scientific sessions will make this event a

					real success.</div>

					<i>
						<div className='from'>Looking forward to welcoming you in Delhi, India.</div>
						<div>With warm regards</div>
						<div>
							<img className='pic-president' src='/images/president.jpg' width='100'/>
						</div>
						<div>Dr. Prema Bali,</div>
						<div>Founding President, IAAH​</div>
					</i>
				</div>
			</div>
		 </div>
	 );
 }
}