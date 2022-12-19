import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GetSingleClaim from './GetSingleClaim';
import Header from './Header'
import ClaimsService from '../services/ClaimsService';
import history from './history'
let cl=0;

class AdminDashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            total_claims:0,
            pending_claims:0,
            approved_claims:0,
            rejected_claims:0
        }
    }

    componentDidMount(cid){
        ClaimsService.getTotalClaimsCount().then((response)=>{
            this.setState({total_claims:parseInt(response.data)})
           // console.log("toal claims: ",this.state.total_claims)
            console.log(response.data)
        })

        ClaimsService.getPendingClaimsCount().then((response)=>{
            this.setState({pending_claims:parseInt(response.data)})
            //console.log("pending claims: ",this.state.pending_claims)
            console.log(response.data)
        })

        ClaimsService.getApprovedClaimsCount().then((response)=>{
            this.setState({approved_claims:parseInt(response.data)})
            //console.log("approved claims: ",this.state.approved_claims)
            console.log(response.data)
        })

         ClaimsService.getRejectedClaimsCount().then((response)=>{
            this.setState({rejected_claims:parseInt(response.data)})
            //console.log("rejected claims: ",this.state.rejected_claims)
            console.log(response.data)
        })
        
    }

    getAllClaims(){
        history.push("/getallclaims")
        window.location.reload()
    }

    getPendingClaims(){
        history.push("/getpendingclaims")
        window.location.reload()
    }

    getApprovedClaims(){
        history.push("/getapprovedclaims")
        window.location.reload()
    }

    getRejectedClaims(){
        history.push("/getrejectedclaims")
        window.location.reload()
    }
    
    render() {
        
        return (
            
            <div className='container mt-4 '>


                <div className='row '>
                    <div className='col-3 mt-1'> 
                        <div className="card  bg-success" onClick={()=>this.getAllClaims()}  style={{width: "10rem",height:"8rem",color:"black",cursor: "pointer"}}>
                            <h3 className='text-center'>{this.state.total_claims}</h3>
                            <div className="card-body text-center">
                                <h5 className="card-title">Total<br/> Claims</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 mt-1'> 
                        <div className="card  bg-success" onClick={()=>this.getPendingClaims()}  style={{width: "10rem",height:"8rem",color:"black",cursor: "pointer"}}>
                            <h3 className='text-center'>{this.state.pending_claims}</h3>
                            <div className="card-body text-center">
                                <h5 className="card-title">Pending Claims</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-4 '>
                
                    <div className='col-3 mt-1'> 
                        <div className="card  bg-success" onClick={()=>this.getApprovedClaims()}  style={{width: "10rem",height:"8rem",color:"black",cursor: "pointer"}}>
                            <h3 className='text-center'>{this.state.approved_claims}</h3>
                            <div className="card-body text-center">
                                <h5 className="card-title">Approved Claims</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 mt-1'> 
                        <div class="card  bg-success" onClick={()=>this.getRejectedClaims()}  style={{width: "10rem",height:"8rem",color:"black",cursor: "pointer"}}>
                            <h3 className='text-center'>{this.state.rejected_claims}</h3>
                            <div class="card-body text-center">
                                <h5 class="card-title">Rejected Claims</h5>
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
        );
    }
}

export default AdminDashboard;