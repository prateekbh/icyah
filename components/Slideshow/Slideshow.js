import {h, Component} from 'preact';
import './Slideshow.css';

export default class Slideshow extends Component {
    constructor(){
        super();
        this.state = {
            index: 0,
        }
    }
    componentDidMount(){
        setInterval(()=>{
            if (this.state.index === 2) {
                this.setState({
                    index: 0,
                });
            } else {
                this.setState({
                    index: this.state.index + 1,
                });
            }
        }, this.props.timer)
    }
    render(){
        return (
            <div className='slideshow'>
                <div className='slide-container' style={'transform:translateX(-'+ this.state.index*1024 +'px)'}>
                    <img className='slide' src={this.props.images[0]} />
                    <img className='slide' src={this.props.images[1]} />
                    <img className='slide' src={this.props.images[2]} />
                </div>
            </div>
        );
    }
}