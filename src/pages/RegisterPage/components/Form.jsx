import React from 'react';

function Form() {

    return (
        <div className="form-container">
            <form>
                <div class="form-group">
                    <label for="text" class="etiqueta">Nombre</label>
                    <input type="text" class="form-control" id="nombre" aria-describedby="emailHelp" placeholder="Ingresa tu Nombre" required/>
                </div>
                <div class="form-group">
                    <label for="text" class="etiqueta">Apellido</label>
                    <input type="text" class="form-control" id="apellido" aria-describedby="emailHelp" placeholder="Ingresa tu Apellido" required/>
                </div>
                <div class="form-group">
                        <label for="email" class="etiqueta">E-Mail</label>
                        <input type="emai" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Ingresa tu Email" required/>
                </div>
                <div class="form-group">
                        <label for="password" class="etiqueta">Contraseña</label>
                        <input type="password" class="form-control" id="password" placeholder="Contraseña" required />
                </div>
                <div class="dropdown show">
                        <a class="btn btn-block btn-secondary dropdown-toggle" href="https://google.com.ar" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            ¿Con que estilo te identificas?
                        </a>
                        <div class="dropdown-menu" id="estilo" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item selection" href="https://google.com.ar" >Rock</a>
                            <a class="dropdown-item selection" href="https://google.com.ar" >Pop</a>
                            <a class="dropdown-item selection" href="https://google.com.ar" >Heavy Metal</a>
                            <a class="dropdown-item selection" href="https://google.com.ar" >Electro</a>
                            <a class="dropdown-item selection" href="https://google.com.ar" >Trap</a>
                        </div>
                </div>
                <br/>
                <button type="submit" id="registrate" class="btn btn-block btn-success">Registrarse</button>
            </form>
        </div>
    )
};

export default Form;
