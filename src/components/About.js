import React, { Fragment } from 'react'
function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">À propos de moi</h1>
                            <hr></hr>
                            <p>
                            Je m'appelle Zakaria AMELLAL, étudiant en 5éme année cycle d'ingénieur à l'Ecole Marocaine des Sciences de l'ingénieur.
                            </p>
                            <p className='slide-in-bottom'>En tant qu'autonome challenger, je suis déterminé et motivé à atteindre mes objectifs. Je suis également engagé à continuellement apprendre et à travailler en équipe tout en étant capable de m'auto-évaluer. J'ai une forte capacité à résoudre les problèmes et à aborder les situations avec une perspective multi-facettes.
                            </p>
                            <p className='slide-in-bottom'>
                            Actuellement À la recherche d'un stage PFE d'une durée de 4 à 6 mois à partir du 1er mars.<br></br>
                            </p>              
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/nomad-amico1.jpeg" alt="..."></img>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
export default About