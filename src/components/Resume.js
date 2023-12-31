import React, { Fragment } from 'react'
import { SiCodechef,SiHackerrank } from 'react-icons/si';
import {AiFillLinkedin, AiFillGithub, AiOutlineUnorderedList} from 'react-icons/ai'

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="m-0 font-big animate-charcter">Zakaria AMELLAL</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">EXPÉRIENCE</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Stage D'application au sein de Xceed, Casablanca. </h4>
                                <h6 className="blue-label px-2 py-1">Août 2022</h6>
                                <p className="m-0">Conception, développement et création d'une application PHP pour la gestion d'une école</p>
                                
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Stage au sein de l'agence du bassin hydraulique de l'Om Er Rabia, Béni Mellal.</h4>
                                <h6 className="blue-label px-2 py-1">Février 2018</h6>
                                <p className="m-0">Implémentation et configuration de SNMP sur un réseau.</p>
                                
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">FORMATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Ingénierie Informatique et Réseaux</h4>
                                <h6 className="blue-label px-2 py-1">2021 - 2024</h6>
                                <p className="m-0">Ecole Marocaine des Sciences de l’Ingénieur- Marrakech </p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Langue et Littérature Anglaises</h4>
                                <h6 className="blue-label px-2 py-1">2019 - 2020</h6>
                                <p className="m-0">Faculté des Lettres et des Sciences Humaines - Beni Mellal</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Diplôme de technicien spécialise en réseau informatique</h4>
                                <h6 className="blue-label px-2 py-1">2016 - 2018</h6>
                                <p className="m-0">Institut Spécialisé de Technologie Appliquée NTIC - Beni Mellal</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Baccalauréat Sciences de la vie et terre</h4>
                                <h6 className="blue-label px-2 py-1">2015 - 2016</h6>
                                <p className="m-0">Lycée Ibno Tofail - Béni Mellal</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">PROFILE</h4>
                        <h1>
                            <a href="https://github.com/Amellalzakaria" target="/blank" className="text-white text-decoration-none mx-2">
                                <AiFillGithub className="zoom-on-hover"/>
                            </a> 
                            <a href="https://www.linkedin.com/in/zakaria-amellal/" target="/blank" className="text-white text-decoration-none mx-2">
                                <AiFillLinkedin className="zoom-on-hover"/>
                            </a> 
                        </h1>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume