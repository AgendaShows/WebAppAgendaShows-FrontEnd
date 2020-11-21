import React from 'react';

//* Styles
import '../../assets/styles/Register/register.scss';

//* Components
import Titulo from './components/Titulo';
import Form from './components/Form';


function Register() {
    return (
        <div className="container-fluid fondo-recital">
            <div className="row">
                <div className="col-12">
                    <Titulo />
                </div>
                <div className="col-12 offset-3 col-lg-6">
                    <Form /> 
                </div>
            </div>
        </div>
    )
};

export default Register
