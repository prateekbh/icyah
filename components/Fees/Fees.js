import {h, Component} from 'preact';
import './Fees.css';

export default class Fees extends Component {
 render(){
	 return (
		 <div className='page page-fees'>
			<div className='content-fees'>
				<h2 className="typl8-delta">Sponsorship for Conference, Sessions and Associated Events</h2>
				<table border='1'>
					<tr>
						<td><strong>Platinum Sponsor</strong></td>
						<td>Rs. 5 lakhs</td>
					</tr>
					<tr>
						<td><strong>Gold Sponsor</strong></td>
						<td>Rs. 3 lakhs</td>
					</tr>
					<tr>
						<td><strong>Silver Sponsors</strong></td>
						<td>Rs. 2 lakhs</td>
					</tr>
					<tr>
						<td><strong>Workshop Sponsorship</strong></td>
						<td>Rs. 2 lakhs</td>
					</tr>
					<tr>
						<td><strong>Scientific Session Sponsorship</strong></td>
						<td>Rs. 1 lakhs</td>
					</tr>
				</table>
				<h2 className="typl8-delta">Exhibition Stalls:</h2>
				<table border='1'>
					<tr>
						<td><strong>3 days</strong></td>
						<td>Rs. 60,000/-</td>
					</tr>
					<tr>
						<td><strong>2 days</strong></td>
						<td>Rs. 45,000/-</td>
					</tr>
					<tr>
						<td><strong>1 day</strong></td>
						<td>Rs. 25,000/-</td>
					</tr>
				</table>
				<h2 className="typl8-delta">Advertisement in Souvenir:</h2>
				<table border='1'>
					<tr>
						<td><strong>Back cover - Coloured</strong></td>
						<td>Rs. 30,000/-</td>
						<td><strong>Front Inner Cover - Coloured</strong></td>
						<td>Rs. 25,000/-</td>
					</tr>
					<tr>
						<td><strong>Back Inner Cover - Coloured</strong></td>
						<td>Rs. 25,000/-</td>
						<td><strong>Full Page - Coloured</strong></td>
						<td>Rs. 20,000/-</td>
					</tr>
					<tr>
						<td><strong>Half Page - Coloured</strong></td>
						<td>Rs. 15,000/-</td>
						<td><strong>Full Page- B &amp; W</strong></td>
						<td>Rs. 15,000/-</td>
					</tr>
					<tr>
						<td><strong>Half Page- B &amp; W</strong></td>
						<td>Rs. 8,000/-</td>
						<td><strong>Bookmark</strong></td>
						<td>Rs. 20,000/-</td>
					</tr>
					<tr>
						<td><strong>Delegate Bags</strong></td>
						<td>Rs. 20,000/-</td>
						<td><strong></strong></td>
						<td></td>
					</tr>
				</table>
			</div>
		 </div>
	 );
 }
}