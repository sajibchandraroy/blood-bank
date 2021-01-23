import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import image1 from '../Image/HomeBackground/1.jpg';
import image2 from '../Image/HomeBackground/2.jpg';
import image3 from '../Image/HomeBackground/3.jpg';


const Main = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={image1} style={{ width:'300px', height:'450px'}} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={image2} style={{ width:'300px', height:'450px'}} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={image3} style={{ width:'250px', height:'450px'}} class="d-block" alt="..." />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </a>
        </div>
    );
};

export default Main;