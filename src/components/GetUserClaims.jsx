import React, { Component } from 'react';
import GetUserClaimsService from '../services/GetUserClaimsService';
import AuthenticationService from '../services/AuthenticationService';

class GetUserClaims extends Component {
    constructor(props){
        super(props)
        // this.state = {
        //     Users: []
        // }
    }
    

     componentDidMount(){
        let username = AuthenticationService.getLoggedUsername()
        GetUserClaims.GetUserClaims(username)
    //         //this.setState({Users:response.data});
    //         response.json()}).then((actualData) => {
    //             console.log(actualData);
    //           })
     }

    render() {
      
        let username = AuthenticationService.isUserloggedIn()
        fetch(`http://localhost:9090/getuserbyemail/${username}`)
        .then(response=>response.json())
        .then((actualData)=>console.log(actualData));
         return (
            
            <div className='container-fluid '>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            
                            <th>Insured Details</th>
                            <th>Hosptalization Details</th>
                            <th>Policy</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    {/* <tbody>
                        {
                            // this.state.Users.map(
                            //     User =>
                            //     <tr key={User.user__Id}>
                            //         <td>{User.user_claims}</td>
                            //     </tr>
                            // )
                            this.state.Users.map(
                                User=>
                                <tr key={User.user_Id}>
                                    <td>{User.user_email}</td>
                                </tr>

                            )
                            
                        }
                    </tbody> */}
                </table>

            </div>
        </div>
        );
    }
}

export default GetUserClaims;