import {h, Component} from 'preact';

export default class ContactUS extends Component {
 componentDidMount(){
     setTimeout(()=>{
         window.init_map();
     }, 2000);
 }
 render(){
	 return (
		 <div className='page page-contact us'>
			<div className='content-contact us'>
				<h2 className="typl8-gamma">Contact Us</h2>
                <div>
                    <h6>For any information / question, kindly contact :</h6>

                    <ul style='font-size:14px'>
                        <li>
                            <div style='font-size: 16px; font-weight: 700; color: tomato'>Dr. Jugal Kishore</div>
                            <div><b>Mobile:</b> +91-9582792331</div>
                            <div><b>EMail:</b> <a href='mailto:icyah.foundation@gmail.com'>icyah.foundation@gmail.com</a></div>
                            <div><b>Site:</b> <a href='http://icyah.org'>icyah.org</a></div>
                        </li>
                    </ul>
                </div>

                <h6 style='margin:25px 0 8px'>Location:</h6>
                <div style='margin-bottom: 16px; font-size: 14px;'>Convention Hall, NDMC New Delh</div>
                <div style='overflow:hidden;height:350px;width:700px;'><div id='gmap_canvas' style='height:440px;width:700px;'></div><div><small><a href="http://embedgooglemaps.com">embed google maps</a></small></div><div><small><a href="https://privacypolicygenerator.info">privacy policy generator</a></small></div></div>
			</div>
		 </div>
	 );
 }
}