import { h, Component } from 'preact';
import './Abstract.css';

export default class Abstract extends Component {
	constructor(){
		super();
		this.state = {
			abstractSubmitted: false,
			isFormSubmitting: false
		}
	}
	submitForm(){
		const that = this;
		this.setState({
			abstractSubmitted: false,
			isFormSubmitting: true
		});
		const aname = this.frm.name.value;
		const aemail = this.frm.email.value;
		const fr = new FileReader();
		fr.addEventListener('loadend',function(e){
			var myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");
			fetch('/submitabstract',{
				method: 'POST',
				headers:myHeaders,
				body: JSON.stringify({
					name: aname,
					email: aemail,
					file: e.target.result
				})
			})
			.then(res => {
				if(res.ok){
					that.setState({
						abstractSubmitted: true,
						isFormSubmitting: false
					});
					console.log('abstract submitted');
				} else {
					throw new Error('not good ajax');
				}
			}).catch(e => {
				this.setState({
					abstractSubmitted: false,
					isFormSubmitting: false
				});
			});
		});
		fr.addEventListener('error',function(e){
			alert('File could not be read');
		});
		fr.readAsDataURL(this.frm.abstractfile.files[0]);

	}
	render() {
		return (
			<div className='page page-abstract'>
				<div className='content-abstract'>
					<h2 className="typl8-delta">Guidelines for Abstract Submission</h2>
					<p>
						<div><b>Authors List:</b> List the name of authors and address of institutions with e mail-ID. Please underline presenting author’s name.</div>
						<div><b>Abstract Title:</b> Please type abstract title in UPPERCASE and do not put a full stop (.) after the title.</div>
						<ol>
							<li>Abstracts must be typed and submitted in English in Word Format, font type “Times New Roman”, font size 12 and should be submitted online only</li>
							<li>Abstract should include i) Introduction, ii) Objectives, iii) Materials and Methods, v) Results and vi) Conclusion.</li>
							<li>The abstract must not exceed 250 words</li>
							<li>The Abstract should be submitted online only</li>
							<li>Duration for Oral presentation will be restricted to 10 minutes (8 minutes for presentation and 2 minutes for discussion).</li>
						</ol>
					</p>
					{this.state.abstractSubmitted ?
							<div>
								<h2>Form submitted</h2>
							</div> :
							<div>
								<h2 className="typl8-delta">Submit Abstract</h2>
								<form action="javascript:" method="POST" ref={(frm)=> {this.frm = frm}} onSubmit={this.submitForm.bind(this)}>
									<div>
										<label>Name</label><input class='typl8-zeta' type="text" name="name" required />
									</div>
									<div>
										<label>EMail Id</label><input class='typl8-zeta' type="email" name="email" required />
									</div>
									<div>
										<input type="file" name="abstractfile" required accept=".pdf" />
									</div>
									<div>
										<input type="submit" class="submit" value={this.state.isFormSubmitting?'Sending':'Send'} />
									</div>
								</form>
							</div>
					}
				</div>
			</div>
		);
	}
}