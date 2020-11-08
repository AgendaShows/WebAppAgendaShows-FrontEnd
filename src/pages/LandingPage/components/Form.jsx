import React from 'react';

function Form() {

    return (
        <form action="/user/login" method="POST" id="form"> 
            <div className="form-group">
                <label for="email" className="etiqueta">E-Mail</label>
                <input type="emai" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Ingresa tu Email" required/>
            </div>
            <div className="form-group">
                <label for="password" className="etiqueta">Contraseña</label>
                <input type="password" className="form-control" id="password" placeholder="Contraseña" required/>
            </div>
            <br/>
            <button type="submit" id="boton-inicia" className="btn btn-primary">Inicia Sesion</button>
        </form>
    )
};

export default Form;