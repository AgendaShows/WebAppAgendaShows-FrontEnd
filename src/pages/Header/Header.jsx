import React from 'react';

//* Styles
import '../../assets/styles/Header/header.scss';

//* Components
import Title from './components/Title';
import Button from './components/Button';
import SearchBar from './components/SearchBar';
import Form from './components/Form';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-nav navbar-expand-xl sticky-top">
                <Title />
                <Button />
                <div className="navbar-collapse collapse" id="barraDeNavegacion">
                    <SearchBar />
                    <Form />
                </div>
            </nav>
        </header>
    )
};

export default Header;
