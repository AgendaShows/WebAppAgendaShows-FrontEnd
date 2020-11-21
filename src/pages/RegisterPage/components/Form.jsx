import React, {useState} from 'react';
import {createUsersApi} from '../../../services/userService';
import {Redirect} from 'react-router-dom';

function Form() {

    const [userData, setState] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: ''
    });

    const [isRegister, setIsRegister] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }));
    }

    const handleClick = async (e) => {
        e.preventDefault();

        await createUsersApi(userData);
        setIsRegister(true);
    }

    return (
        <>
            {isRegister && <Redirect to="/" />}
            <div className="form-container">
                <form>
                    <div className="form-group">
                        <label htmlFor="text" className="etiqueta">Nombre</label>
                        <input type="text" 
                            id="nombre" 
                            className="form-control" 
                            aria-describedby="emailHelp" 
                            placeholder="Ingresa tu Nombre"
                            value={userData.nombre} 
                            onChange={handleInputChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="text" className="etiqueta">Apellido</label>
                        <input type="text" 
                            id="apellido" 
                            className="form-control" 
                            aria-describedby="emailHelp" 
                            placeholder="Ingresa tu Apellido"
                            value={userData.apellido} 
                            onChange={handleInputChange} required/>
                    </div>
                    <div className="form-group">
                            <label htmlFor="email" className="etiqueta">E-Mail</label>
                            <input type="email" 
                                id="email" 
                                className="form-control" 
                                aria-describedby="emailHelp" 
                                placeholder="Ingresa tu Email"
                                value={userData.email} 
                                onChange={handleInputChange} required/>
                    </div>
                    <div className="form-group">
                            <label htmlFor="password" className="etiqueta">Contraseña</label>
                            <input type="password" 
                                id="password" 
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
                        onClick={handleClick}>
                            Registrarse
                        </button>
                </form>
            </div>
        </>
    )
};

export default Form;
