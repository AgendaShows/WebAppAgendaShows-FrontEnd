import React from 'react';

function Button() {
    return (
        <div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#barraDeNavegacion"
                aria-controls="barraDeNavegacion" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <i className="fas fa-bars"/>
                </span>
            </button>
        </div>
    )
};

export default Button;
