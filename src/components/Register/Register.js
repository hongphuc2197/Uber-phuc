import React from 'react';
import './Register.scss';
import FormRegister from './FormRegister/FormRegisters';
const register = (props) => (
    <div className = "registerBg">
        <FormRegister form = {{
            
                phone : '',
                fullname : '',
                gender: '',
                singleCheckbox: false
            
        }}
        
        />
    </div>
)


export default register;