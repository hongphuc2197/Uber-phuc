import React from 'react';
import './FormProfile.scss';
import Upload from './../../../../assets/img/upload.png';
import rightArrow from './../../../../assets/img/rightArrow.png';
const Step3 = ({ handleChange, values, prevStep,nextStep }) => (
   <div>
   <div className="coverInfo">
     <div className = "Form2">
        <div className="enter1">
            <p>Enter your Info</p>
        </div>
        <div className="group-inline">
            <input type="name"
                    name = "fullname"
                 className="coverFormInput form-control"
                  placeholder="Enter your full name" 
                  value={values.fullname}
                  onChange={handleChange} 
                  />
        </div>

        <div className="groupGender">
            <p className="selectGender gray-color">Select gender</p>
            <input id ="male" type="radio" name="gender" value={values.gender} onChange = {handleChange}/>
            <label className="drinkcard-cc male" htmlFor="male"></label>
                    
            <input id="female" type="radio" name="gender" value={values.gender} onChange = {handleChange}/> 
                
            <label className="drinkcard-cc female" htmlFor="female"></label>
           
        </div>
        <div className="groupUpload">
            <button className="toggleButton" type="button"><img className="profilePic"src={Upload} alt=""/></button>
            <p className="profile gray-color">Upload profile picture</p>
        </div>

        <div className="rightArrow1">
            <button type= "submit" className="rightArrBtn" >
                <img className="rightArrowImg" src={rightArrow} alt=""/>
            </button>
        </div>
        </div>
</div>
</div>
)

export default Step3;