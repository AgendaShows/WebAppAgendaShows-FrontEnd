import React, { useState } from 'react';
import { createUsersApi } from '../../../services/userService';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2'

function Form() {

    const [userData, setState] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: ''
    });

    const [isRegister, setIsRegister] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name] : value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userData.nombre && !userData.apellido && !userData.email && !userData.password) {
            Swal.fire({
                title: "Debe completar todos los campos",
                text: "Verifique la informacion ingresada",
                icon: "error",
                timer: 1500
            }); 
        } else {
            Swal.fire({
                title: "Registro exitoso!",
                text: "Ya puede iniciar sesion",
                icon: "success",
                timer: 1500
            })
            createUsersApi(userData);
            setIsRegister(true);
        }
    }

    return (
        <>
            {isRegister && <Redirect to="/" />}
            <div className="form-container">
                <form>
                    <div className="form-group">
                        <label htmlFor="text" className="etiqueta">Nombre</label>
                        <input type="text" 
                            name="nombre" 
                            className="form-control" 
                            aria-describedby="emailHelp" 
                            placeholder="Ingresa tu Nombre"
                            value={userData.nombre} 
                            onChange={handleInputChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="text" className="etiqueta">Apellido</label>
                        <input type="text" 
                            name="apellido" 
                            className="form-control" 
                            aria-describedby="emailHelp" 
                            placeholder="Ingresa tu Apellido"
                            value={userData.apellido} 
                            onChange={handleInputChange} required/>
                    </div>
                    <div className="form-group">
                            <label htmlFor="email" className="etiqueta">E-Mail</label>
                            <input type="email" 
                                name="email" 
                                className="form-control" 
                                aria-describedby="emailHelp" 
                                placeholder="Ingresa tu Email"
                                value={userData.email} 
                                onChange={handleInputChange} required/>
                    </div>
                    <div className="form-group">
                            <label htmlFor="password" className="etiqueta">Contraseña</label>
                            <input type="password" 
                                name="password" 
                                className="form-control" 
                                placeholder="Contraseña"
                                value={userData.password} 
                                onChange={handleInputChange} required />
                    </div>
                    <div className="dropdown show">
                            <a className="btn btn-block btn-secondary dropdown-toggle" href="https://google.com.ar" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ¿Con que estilo te identificas?
                            </a>
                            <div className="dropdown-menu" id="estilo" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item selection" href="https://google.com.ar" >Rock</a>
                                <a className="dropdown-item selection" href="https://google.com.ar" >Pop</a>
                                <a className="dropdown-item selection" href="https://google.com.ar" >Heavy Metal</a>
                                <a className="dropdown-item selection" href="https://google.com.ar" >Electro</a>
                                <a className="dropdown-item selection" href="https://google.com.ar" >Trap</a>
                            </div>
                    </div>
                    <br/>
                    <button type="submit" 
                        id="registrate" 
                        className="btn btn-block btn-success"
                        onClick={handleSubmit}>
                            Registrarse
                        </button>
                </form>
            </div>
        </>
    )
};

export default Form;