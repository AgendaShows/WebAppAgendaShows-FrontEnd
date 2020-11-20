import React from 'react';
import image from './profilePicture.jpg'
import Mapa from './Mapa.jpg'
function SideBar (){
    return (
        <>
            <img src={image} alt="Foto de Perfil" className="fotoPerfil"/>
            <ul>
                <li>Mi Cuenta</li>
                <li>Explorar</li>
                <li>Artistas Favoritos</li>
                <li>Mis Conciertos</li>
                <li>Cerrar Sesion</li>
                <li>Opciones</li>
            </ul>
            <div className="dropdown">
                <button className="btn btn-info dropdown-toggle" data-toggle="dropdown">Mi Menu</button>
                <div className="dropdown-menu">
                    {/* <a className="dropdown-item"><li>Mi cuenta</li></a>
                    <a className="dropdown-item"><li>Explorar</li></a>
                    <a className="dropdown-item"><li>Mis Conciertos</li></a>
                    <a className="dropdown-item"><li>Cerrar Sesion</li></a>
                    <a className="dropdown-item"><li>Opciones</li></a> */}
                </div>
            </div>
            <img src={Mapa} alt="MAPA" className="map"/>
        </>
    )
};

export default SideBar;