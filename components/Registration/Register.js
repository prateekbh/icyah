import {h, Component} from 'preact';
import LoginSignup from '../LoginSignup/LoginSignup';
import {RegistrationFeesData, calcFees} from '../../utils/feesUtils';
import './Registration.css';

export default class Register extends Component {
 register(){
     fetch('/user/register',{
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json'
        }),
        credentials: 'include',
        body:JSON.stringify({
            name: this.regname.value,
            phone: this.regphone.value,
            attendingConf: this.regconf.checked,
            attendingWorkshop: this.regworkshop.checked,
            occupation: this.regoccupation.value
        }),
    })
    .then(res=>{
        if (res.ok){
            return res.json();
        } else {
            throw new Error('');
        }
    })
    .then(res=>{
        this.props.doneRegistration && this.props.doneRegistration(res);
    }).catch(e=>{
        alert('Cannot Register, please try again after sometime.');
    });
 }
 pay(){
     const amount = calcFees(this.props.user.occupation, this.props.user.registeredForConf, this.props.user.registeredForWorkshop) * 100;
     let desc = 'Registration fees for: ';
     if (this.props.user.attendingConf) {
         desc += "Attending conference, ";
     }
     if (this.props.user.attendingWorkshop) {
         desc += "Attending workshop, ";
     }
     const options = {
        "key": "rzp_test_TrPU5mYt8jVAkR",
        amount,
        "name": "ICYAAH",
        "description": desc,
        "image": "/images/logo.png",
        "handler": (response) => {
            this.sendPayment(response.razorpay_payment_id, amount);
        },
        "prefill": {
            "name": this.props.user.name,
            "email": this.props.user.email,
            "phone": this.props.user.phone,
        },
    };
    var rzp = new Razorpay(options);
    rzp.open();
 }
 sendPayment(payment_id, amount){
     fetch('/user/pay',{
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json'
        }),
        credentials: 'include',
        body:JSON.stringify({
            payment_id,
            amount
        }),
    })
    .then(res=>{
        if (res.ok){
            return res.json();
        } else {
            throw new Error('');
        }
    })
    .then(res=>{
        this.props.paymentDone && this.props.paymentDone(res);
    }).catch(e=>{
        alert('Payment failed.');
    });
 }
 render(){
	 return (
		 <div className='page page-register'>
			<div className='content-register'>
				<h2 className="typl8-delta">Start Registering</h2>
				<p>
					{
                        this.props.user && this.props.user.email ?
                            <div className='registration'>
                                {
                                    this.props.user.registrationDone ? 
                                    <div className='msg'>
                                        {
                                            this.props.user.paymentDone?
                                            <div className='complete'>
                                                <div>Congrats your payment is done with id: {this.props.user.payment_id}</div>
                                            </div> :
                                            <div className='payment-step'>
                                                <div>
                                                    <label><input ref={e=>this.regconf=e} type='checkbox' disabled checked={this.props.user.registeredForConf || true}/>Attending Conference</label>
                                                </div>
                                                <div>
                                                    <label><input ref={e=>this.regworkshop=e} type='checkbox' disabled checked={this.props.user.registeredForWorkshop || false}/>Attending Pre-Conference Workshop</label>
                                                </div>
                                                <div>
                                                    <button onClick={this.pay.bind(this)}>
                                                        PAY {calcFees(this.props.user.occupation, this.props.user.registeredForConf, this.props.user.registeredForWorkshop)}
                                                    </button>
                                                </div>
                                            </div>
                                        }
                                    </div> :
                                    <div className='regForm'>
                                        <div>
                                            <input className='typl8-zeta ' ref={e=>this.regname=e} placeholder='full name' value={this.props.user.name}/>
                                        </div>
                                        <div>
                                            <input className='typl8-zeta ' ref={e=>this.regphone=e} maxLength='10' placeholder='phonenumber' value={this.props.user.phone}/>
                                        </div>
                                        <div>
                                            <label><input ref={e=>this.regconf=e} type='checkbox' maxLength='10' checked={this.props.user.registeredForConf || true}/>Attending Conference</label>
                                        </div>
                                        <div>
                                            <label><input ref={e=>this.regworkshop=e} type='checkbox' maxLength='10' checked={this.props.user.registeredForWorkshop || false}/>Attending Pre-Conference Workshop</label>
                                        </div>
                                        <div>
                                            <label>Select occupation</label>
                                            <select ref={e=>this.regoccupation=e}>
                                                {RegistrationFeesData.map(e=>{
                                                    return <option>{e.name}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className='note'>
                                            *LMIC: Lower middle income coutry
                                        </div>
                                        <div>
                                            <button onClick={this.register.bind(this)}>Register</button>
                                        </div>
                                    </div>
                                }
                            </div> :
                            <div className='login'>
                                <LoginSignup {...this.props}/>
                            </div>
                    }
				</p>
			</div>
		 </div>
	 );
 }
}