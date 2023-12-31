import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

function MyWork() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">projets</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner zoom-on-hover rounded">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/pharmacyLocater.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">PharmacyLocator</h5>
                            <div className="row d-flex justify-content-center zoom-on-hover">
                                <a href="https://github.com/Amellalzakaria/PharmacyLocator_SpringBoot" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>

                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner zoom-on-hover rounded">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/authorpersonbook.png" className="d-block w-100" alt="..."/>
                                </div>
                                </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div>
                            <h5 className="ff-jose my-1">PersonAuthorBook SpringBoot</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/Amellalzakaria/PersonAuthorBook_SpringBoot" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner zoom-on-hover rounded">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/pokemon2.jpeg" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">Pokédex Android App</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/Amellalzakaria/Pokemon_Android_App-api" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>
                    </div>


                    <div className="col-md-4 text-center my-2">
    <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
        <div className="carousel-inner zoom-on-hover rounded">
            {/* Carousel Item 1 */}
            <div className="carousel-item active">
                <img src="../portfolio-images/mernblog.png" className="d-block w-100" alt="First slide" />
            </div>

            {/* Carousel Item 2 */}
            <div className="carousel-item">
                <img src="../portfolio-images/mernblog2.png" className="d-block w-100" alt="Second slide" />
            </div>
        </div>

        {/* Carousel Previous Button */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>

        {/* Carousel Next Button */}
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

    <h5 className="ff-jose my-1">Blog Personnel-MERN</h5>
    <div className="row d-flex justify-content-center">
        <a href="https://github.com/Amellalzakaria/MernStack-Blog-App-v5.5.git" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noopener noreferrer">
            <AiFillGithub/> Source Code
        </a>
    </div>
</div>

                    





                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls4" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner zoom-on-hover rounded">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/tic-tac-toe.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">Tic-Tac-Toe-React.js</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://tic-tac-to-reactjs.netlify.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop/> Watch Live</a>
                                <a href="https://github.com/Amellalzakaria/Tic-Tac-React.js_React" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>                 
                    </div>
                </div>              
            </div>
        </div>
    </Fragment>
  )
}

export default MyWork