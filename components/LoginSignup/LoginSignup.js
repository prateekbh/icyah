import {h, Component} from 'preact';
import './LoginSignup.css';

export default class LoginSignup extends Component {
    constructor(){
        super();
        this.state = {
            tab: 'LOGIN'
        };
    }
    login(){
        fetch('/user/login',{
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            credentials: 'include',
            body:JSON.stringify({
                username: this.uname.value,
                password: this.pwd.value,
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
            this.props.doneLogin && this.props.doneLogin(res);
        }).catch(e=>{
            alert('Cannot login');
        });
    }
    signup(){
        fetch('/user/create',{
            method: 'POST',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            credentials: 'include',
            body:JSON.stringify({
                username: this.regemail.value,
                password: this.regpwd.value,
                name: this.regname.value,
                email: this.regemail.value,
                phone: this.regphone.value,
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
            this.props.doneLogin && this.props.doneLogin(res);
        }).catch(e=>{
            alert('Cannot login');
        });
    }
    render(){
        return (
            <div className='credentials'>
                <div className='tabs'>
                    <div 
                        className={'login tab ' + (this.state.tab === 'LOGIN'?'active':'')}
                        onClick={()=>{
                            this.setState({
                                tab: 'LOGIN'
                            });
                        }}>
                        Login
                    </div>
                    <div 
                        className={'signup tab ' + (this.state.tab === 'SIGNUP'?'active':'')}
                        onClick={()=>{
                            this.setState({
                                tab: 'SIGNUP'
                            });
                        }}>
                        Signup
                    </div>
                </div>
                <div className='content'>
                    {
                        this.state.tab === 'LOGIN' &&  
                        <div className='controls'>
                            <div>
                                <input className='typl8-zeta username' ref={e=>this.uname=e} type='email' placeholder='emailid'/>
                            </div>
                            <div>
                                <input className='typl8-zeta password' type='password' ref={e=>this.pwd=e} placeholder='password'/>
                            </div>
                            <div>
                                <button onClick={this.login.bind(this)}>Login</button>
                            </div>
                        </div>
                    }
                    {
                        this.state.tab === 'SIGNUP' &&  
                        <div className='controls'>
                            <div>
                                <input className='typl8-zeta ' ref={e=>this.regemail=e} type='email' placeholder='email id'/>
                            </div>
                            <div>
                                <input className='typl8-zeta password' type='password' ref={e=>this.regpwd=e} placeholder='password'/>
                            </div>
                            <div>
                                <input className='typl8-zeta ' ref={e=>this.regname=e} placeholder='full name'/>
                            </div>
                            <div>
                                <input className='typl8-zeta ' ref={e=>this.regphone=e} maxLength='10' placeholder='phonenumber'/>
                            </div>
                            <div>
                                <button onClick={this.signup.bind(this)}>Register</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}