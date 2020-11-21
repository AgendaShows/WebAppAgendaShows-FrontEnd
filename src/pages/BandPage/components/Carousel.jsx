import React from 'react';
import Picture1 from './images/First1-1.jpg';
import Picture2 from './images/First2-1.jpg';
import Picture3 from './images/First3-1.jpg';
import Picture4 from './images/First4.jpg';

function Carousel() {
    return (
        <div className="carousel">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={Picture4} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={Picture3} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={Picture2} alt="Third slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={Picture1} alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel;
