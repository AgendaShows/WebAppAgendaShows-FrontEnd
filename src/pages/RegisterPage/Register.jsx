import React from 'react';

//* Estilos
import '../../assets/styles/Register/register.scss';

//* Componentes
import Titulo from '../LandingPage/components/Titulo';
import Form from './components/Form';


function Register() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Titulo />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                    <Form /> 
                </div>
            </div>
        </div>
    )
}

export default Register
