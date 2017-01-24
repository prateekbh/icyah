import {h, Component} from 'preact';
import {RegistrationFeesData} from '../../utils/feesUtils';
import './RegistrationFees.css';

export default class RegistrationFees extends Component {
 render(){
	 return (
		 <div className='page page-regfees'>
			<div className='content-regfees'>
				<h2 className="typl8-delta">Registration Fees</h2>
				<table border='1'>
					<thead>
                        <td>CODE</td>
                        <td>PARTICIPANTS</td>
                        <td>CONFERENCE</td>
                        <td>PRE-CONFERENCE WORKSHOP</td>
                    </thead>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <table style='width:100%'>
                                <tr>
                                    <td className='cell'>Early bird (till 20-2-2017)</td>
                                    <td className='cell'>Till 20-3-2017</td>
                                    <td className='cell'>On Spot</td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            Registration open till 10 - 3 - 2017
                        </td>
                    </tr>
                    {
                        RegistrationFeesData.map(item=>{
                            return (
                                <tr>
                                    <td>{item.code}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <table style='width:100%'>
                                            <tr>
                                                <td className='cell'>{item.currency} {item.fees[0]}/-</td>
                                                <td className='cell'>{item.currency} {item.fees[1]}/-</td>
                                                <td className='cell'>{item.currency} {item.fees[2]}/-</td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>
                                        {item.currency} {item.preconffees}/-
                                    </td>
                                </tr>
                            );
                        })
                    }
				</table>
			</div>
		 </div>
	 );
 }
}