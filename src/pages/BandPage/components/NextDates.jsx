import React from 'react';

function NextDates() {
    return (
        <div className="search-container">
            <div className="row">
                <div className="col-12 title-container">
                    <span className="subtitle">Proximas Fechas</span>
                    <i className="far fa-clock watch-icon"></i>
                </div>
                <div className="col-12 dates-cards">
                    <span>20 de Septiembre</span>
                    <span className="stadium">Wembley Arena</span>
                    <i className="far fa-calendar-check calendar"></i>
                </div>
                <div className="col-12 dates-cards">
                    <span>5 de Noviembre</span>
                    <span className="stadium">Garage Club</span>
                    <i className="far fa-calendar-check calendar"></i>
                </div>
                <div className="col-12 dates-cards">
                    <span>10 de Noviembre</span>
                    <span className="stadium">Tom's Bar</span>
                    <i className="far fa-calendar-check calendar"></i>
                </div>
            </div>
        </div>
    )
};

export default NextDates;