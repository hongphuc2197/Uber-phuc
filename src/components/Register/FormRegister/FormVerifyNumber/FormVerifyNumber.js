import React from 'react'
import './FormVerifyNumber.scss';
const Step2 = ({ handleChange, values, prevStep,nextStep }) => (
             <div className="coverNum">
                    <div className = "Form">
                            <div className="Enter">
                                <div className="digit">
                                    <p>Enter the 4-digit code sent to you at {values.phone}.<span className="correct">did you enter the correct number?</span>
                                    <span onClick ={prevStep}>Do you get back ?</span>
                                    </p>
                                </div>
                                
                            </div>
                            <div className="numbers">
                                <div className="num">1</div>
                                <div className="num">2</div>
                                <div className="num">3</div>
                                <div className="num">4</div>
                            </div>
                            <div className="didnt">
                                <div className="code">
                                        <p>I didn’t receive code</p>
                                </div>
                                <div className="nextBtn">
                                        <button onClick = {nextStep} className="next"> <i className="fas fa-arrow-right"></i></button>
                                </div>
                            </div>
                                
                        </div>
                    </div>
            
  )


  export default Step2;