import React from 'react';
import { Link } from 'react-router-dom';
import image from './profilePicture.jpg'
// import Mapa from './Mapa.jpg'

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
                    <Link to="" className="dropdown-item"><li>Mi cuenta</li></Link >
                    <Link to="" className="dropdown-item"><li>Explorar</li></Link >
                    <Link to="" className="dropdown-item"><li>Mis Conciertos</li></Link >
                    <Link to="" className="dropdown-item"><li>Cerrar Sesion</li></Link >
                    <Link to="" className="dropdown-item"><li>Opciones</li></Link >
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.1202977021126!2d-58.42814054898674!3d-34.568864163066486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5a28c37ff9b%3A0x289b0f07f03e748b!2sHip%C3%B3dromo%20de%20Palermo!5e1!3m2!1ses-419!2sar!4v1606270819849!5m2!1ses-419!2sar" width="200" 
            height="390" frameborder="0" title="maps" className="maps" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </>
    )
};

export default SideBar;