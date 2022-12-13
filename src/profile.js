import React, {useState} from 'react';
import {Modal,ModalHeader, ModalBody, Row, Col} from 'reactstrap';
import './profile.css';

function Profile() {
    const [modal, setmodal] = useState(false)
    return(
        <div>
            <Modal
            size='lg'
            isOpen={modal}
            toggle={() => setmodal(!modal)}>
            <ModalHeader toggle={() => setmodal(!modal)}>
                Personal Settings
            </ModalHeader>
            <ModalBody>
                <form>
                    <Row>
                        <Col lg={8}>
                            <div class="mt-md-2">
                                <label class="h6">
                                    Name
                                </label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Name"/>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div class="mt-md-2">
                                <label class="h6" htmlFor="name">
                                    Email
                                </label>
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Enter Email"/>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div class="mt-md-2">
                                <label class="h6" htmlFor="name">
                                    Department
                                </label>
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Enter department"/>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div class="mt-md-2">
                                <label class="h6" htmlFor="name">
                                    Phone_Number
                                </label>
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Enter Phone Number"/>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div class="mt-md-2">
                                <label class="h6" htmlFor="name">
                                    Password
                                </label>
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Enter Password"/>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div class="mt-md-2">
                                <label class="h6" htmlFor="name">
                                    Parent_Contact_Number
                                </label>
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Enter Parent Contact Number"/>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div class="mt-md-2">
                                <label class="h6" htmlFor="name">
                                    Roll_Number
                                </label>
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Enter Rollnumber"/>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div class="mt-md-2">
                                <label class="h6" htmlFor="name">
                                    Tutor_Name
                                </label>
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Enter Tutor Name"/>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div class="mt-md-2">
                                <label class="h6" htmlFor="name">
                                    Image
                                </label>
                                <input 
                                type="file"
                                className="form-control"
                                placeholder="Upload Image"/>
                            </div>
                        </Col>
                    </Row>
                </form>
                <button className='btn mt-3' style={{backgroundColor: "blue", color: "white"}} onClick={() => setmodal(true)}>
                Submit
            </button>
            </ModalBody>
            </Modal>
            <button className='btn mt-3' style={{backgroundColor: "blue", color: "white"}} onClick={() => setmodal(true)}>
                Open
            </button>
        </div>
    )
}

export default Profile;