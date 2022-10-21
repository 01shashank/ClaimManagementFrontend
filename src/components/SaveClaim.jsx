import React, { Component } from 'react';
import  Dropdown  from 'react-bootstrap/Dropdown';

class SaveClaim extends Component {

    constructor(props){
        super(props)
        
    }

    render() {
        return (
                <form className='form-inline'>
                    <div className='mt-3'><h4>Insured Person's details</h4> 
                        <div className='row'>
                            <div className='form-group col-6 mt-1'> 
                                <label> Name of Person</label>
                                <input type="text" class="form-control input-group-lg reg_name"  placeholder="Enter the name of Insured person"/>
                            </div>
                            <div className='form-group col-6 mt-1'> 
                                <label>Contact Number</label>
                                <input type="number"  class="form-control input-group-lg reg_name"  placeholder="Enter the contact number of Insured person"/>
                            </div> 
                        </div>
                        <div className='row'>
                            <div className='form-group col-6 mt-1'> 
                                <label> Age</label>
                                <input type="text" class="form-control input-group-lg reg_name"  placeholder="Enter age of the Insured person"/>
                            </div>
                            <div className='form-group col-6'> 
                                <label>Relationship </label>
                                <input type="text" class="form-control input-group-lg reg_name"  placeholder="Enter relationship with Insured person"/>
                            </div>
                        </div>
                    </div>

                    <div className='mt-3'><h4>Policy details</h4>
                        <div >
                            <label> Policy Name</label>
                                <Dropdown className='mt-2'>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Select the policy
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="">Standard Plan</Dropdown.Item>
                                        <Dropdown.Item href="">Gold Plan</Dropdown.Item>
                                        <Dropdown.Item href="">Premium Plan</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                        </div>
                        
                    </div>

                    <div className='mt-3'><h4>Hospitalization details</h4> 
                        <div className='row'>
                            <div className='form-group col-6'> 
                                <label> Reason of Hospitalization</label>
                                <input type="text" class="form-control input-group-lg reg_name"  placeholder="Enter the reason of Hospitalization"/>
                            </div>
                            <div className='form-group col-6'> 
                                <label>Doctor</label>
                                <input type="text" class="form-control input-group-lg reg_name"  placeholder="Enter Name of the Doctor consulted"/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-group col-6'> 
                                <label> Medical Expenses</label>
                                <input type="number" class="form-control input-group-lg reg_name"  placeholder="Enter the total Medical Expenses"/>
                            </div>
                            <div className='form-group col-6'> 
                                <label>Non-Medical Expenses</label>
                                <input type="number" class="form-control input-group-lg reg_name"  placeholder="Enter the total Non-Medical Expenses"/>
                            </div>
                        </div>
                        <div className="button-container text-center mt-3 mb-3">
                            <button type="button" className='btn btn-primary'>Submit</button>
                        </div>
          
                    </div>
                </form>
        );
    }
}

export default SaveClaim;