import {h, Component} from 'preact';

export default class AboutUs extends Component {
 render(){
	 return (
		 <div className='page page-cancellation'>
			<div className='content-cancellations'>
				<h2 className="typl8-delta">Cancellation Policy</h2>
				<p>
					<div>The registered delegate be aware of that all registration and accommodation fees (if applicable) must be paid in full before attending the conference.</div>

                    <div>Any amendments and/or cancellations must be notified in writing to the Conference Organisers via email secretariat@conferenceoeh.com</div>

                    <div>Cancellations received in writing before July 31 2016 will be credited back to the registered delegate in full less 33% of the fee paid.</div>

                    <div>50% of the registration amount will be credited back to the registered delegate on cancellations received in writing between August 1 - 31, 2016 .</div>

                    <div>No refunds will be provided after this date.</div>

                    <div>Kindly note that the refund money will be credited back to the payee account after the event is over and latest by October 31, 2016 .</div>

                    <div>Substitute delegates are welcome without any penalty. Please advise the Conference Organisers by email of any name changes as soon as possible at secretariat@conferenceoeh.com</div>
				</p>
			</div>
		 </div>
	 );
 }
}