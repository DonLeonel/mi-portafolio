import { ProjectsBoxCOMP } from "../components/ProjectsBoxCOMP"
import '../styles/project.css'
import expressJs from '../assets/iconsProject/express-js.png'
import nodeJS from '../assets/iconsProject/nodeJS.ico'
import bootstrap from '../assets/iconsProject/bootstrap.ico'
import vite from '../assets/iconsProject/vite.ico'
import html from '../assets/iconsProject/html5.ico'
import css from '../assets/iconsProject/css.ico'
import ejs from '../assets/iconsProject/ejs.ico'
import react from '../assets/iconsProject/react.ico'
import mySql from '../assets/iconsProject/mySql.ico'
import sequelize from '../assets/iconsProject/sequelize.ico'
import nexoBirrero from '../assets/nexoBirrero.png'
import urlShortenerFront from '../assets/urlShortenerFrontend.png'
import boxProyectos from '../assets/boxProyectos.jpg'

const iconUrlShortener = [nodeJS, react, vite, html, css, bootstrap]
const iconUrlShortenerBackend = [nodeJS, expressJs, mySql, sequelize]
const iconNexoBirrero = [nodeJS, expressJs, ejs, css, mySql, sequelize]

export const Project = () => {
    return (
        <section className="section" id='proyectos'>
            <h2 className="h2-subtitulos" >Proyectos en Github<span className="punto">.</span></h2>
            <div className='containerBox'>

                <ProjectsBoxCOMP
                    nombre='Url Shortener (Frontend)'
                    iconProject={iconUrlShortener}
                    img={urlShortenerFront}
                    url='https://github.com/DonLeonel/urlShortener-frontend'
                    ariaLabel="navega hacia el proyecto alojado en github llamado Url Shortener (frontend)"
                />
                <ProjectsBoxCOMP
                    nombre='Url Shortener (API-Backend)'
                    iconProject={iconUrlShortenerBackend}
                    img={boxProyectos}
                    url='https://github.com/DonLeonel/urlShortener-backend'
                    ariaLabel="navega hacia el proyecto alojado en github llamado Url Shortener (backend)"
                />
                <ProjectsBoxCOMP
                    nombre='nexoBirrero (E-Commerce)'
                    iconProject={iconNexoBirrero}
                    img={nexoBirrero}
                    url='https://github.com/DonLeonel/grupo_6_nexoBirrero_E-Commerce'
                    ariaLabel="navega hacia el proyecto alojado en github llamado nexoBirrero"
                />
            </div>
        </section>
    )
}
