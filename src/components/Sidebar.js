import React, { Fragment } from 'react'
import { VscHome } from 'react-icons/vsc'
import { FiUser } from 'react-icons/fi'
import { BsCode, BsFilePdf } from 'react-icons/bs'
import { MdOutlineDashboard, MdOutlineContactPage, MdEmail, MdFileDownload } from 'react-icons/md'
import { AiFillLinkedin, AiFillPhone, AiFillGithub, AiOutlineUnorderedList, AiOutlineDownload, AiFillSafetyCertificate } from 'react-icons/ai'
import { VscAccount } from 'react-icons/vsc'
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <Fragment>
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark slide-in-left">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <Link to="/" className="d-flex align-items-center pb-1 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline ff-jost fw-600">Zakaria</span>
                    </Link>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link align-middle px-0 text-white  zoom-on-hover">
                                <VscHome className='fs-5' /> <span className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1  rounded">Accueil</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link align-middle px-0 text-white  zoom-on-hover">
                                <FiUser className='fs-5' /> <span className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 rounded">À propos</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/skills" className="nav-link align-middle px-0 text-white  zoom-on-hover">
                                <BsCode className='fs-5' /> <span className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1  rounded ">Compétences</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/mywork" className="nav-link align-middle px-0 text-white  zoom-on-hover">
                                <MdOutlineDashboard className='fs-5' /> <span className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1  rounded ">Mes projets</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/resume" className="nav-link align-middle px-0 text-white  zoom-on-hover">
                                <AiOutlineUnorderedList className='fs-5' /> <span className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1  rounded ">CV</span>
                            </NavLink>
                        </li>

                    
                        
                        <li className=" align-middle px-1 text-white zoom-on-hover">
                            <a href="../portfolio-images/AMELLAL Zakaria CV.pdf" download style={{ textDecoration: 'none' }}>
                                <MdFileDownload className='fs-5' />
                                <span className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 rounded">
                                    Telecharger CV
                                </span>
                            </a>
                        </li>


                        
                    </ul>
                    <hr />
                    <div className="dropdown pb-4 dropup">
                        <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle zoom-on-hover" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false" >
                            <MdOutlineContactPage className='fs-5' />
                            <span className="d-none d-sm-inline mx-1  portfolio-link text-decoration-none text-white m-1 px-2 py-1  rounded">Contact</span>
                        </a>
                        <ul className="dropdown-menu shadow " aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item text-black zoom-on-hover" href="mailto:amellalzakaria1@gmail.com" target="/blank"><MdEmail className='fs-5' /> Email</a></li>
                            <li> <hr className="dropdown-divider" /> </li>
                            <li><a className="dropdown-item text-black zoom-on-hover" href="https://www.linkedin.com/in/zakaria-amellal/" target="/blank"><AiFillLinkedin className='fs-5' /> LinkedIn</a></li>
                            <li> <hr className="dropdown-divider" /> </li>
                            <li><a className="dropdown-item text-black zoom-on-hover" href="callto:+212645623328" target="/blank"><AiFillPhone className='fs-5' /> Telephone</a></li>
                            <li> <hr className="dropdown-divider" /> </li>
                            <li><a className="dropdown-item text-black zoom-on-hover" href="https://github.com/Amellalzakaria" target="/blank"><AiFillGithub className='fs-5' /> Github</a></li>
                            <li> <hr className="dropdown-divider" /> </li>
                        </ul>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Sidebar