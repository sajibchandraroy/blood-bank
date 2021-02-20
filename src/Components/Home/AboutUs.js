import React from 'react';
import image1 from "../Image/AboutUs/image1.jpg";
import image2 from "../Image/AboutUs/image2.jpg";
import image3 from "../Image/AboutUs/image3.jpg";



const AboutUs = () => {
    return (
        <div id="aboutUs" className="container">
            <h1>Who We Are</h1>
            <div class="row">
                <div class="col-8"><p>We are, the Bangladesh Red Crescent Society (BDRCS) – part of the world’s largest humanitarian non-governmental organisation, The International Red Cross and Red Crescent Movement.
                We have stood beside the Bangladeshi population throughout history and have played a crucial humane role in the relief, rescue and rehabilitation of hundreds and thousands of victims of flood, cyclone and other natural disasters in Bangladesh.
Our work is outlined by our guiding principles, and our history that shapes our morals and ethics. Find out more about what makes us unique, compassionate and dedicated to caring, all over the world.</p></div>

                <div class="col-4">
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={image1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={image2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={image3} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;