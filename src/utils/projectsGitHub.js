import { techForProjects } from './imgTechProjects'
import { urlShortenerFrontend, imgBackend, nexoBirrero, hidraApp } from '../assets/boxProjects'

export const projectsGitHub = {
    frontend: [ 
        {
            nombre: 'Url Shortener',
            iconProject: techForProjects.iconUrlShortenerFront,
            desc: 'Aplicación web para acortar URLs.',
            img: urlShortenerFrontend,
            url: 'https://github.com/DonLeonel/urlShortener-frontend',
            ariaLabel: "navega hacia el proyecto alojado en github llamado Url Shortener"
        },
        {
            nombre: 'HidraApp',
            className: 'mobile',
            iconProject: techForProjects.iconHidraAppFront,
            desc: 'Aplicación mobile web para la gestión de productos, clientes y facturación.',
            img: hidraApp,
            url: 'https://github.com/DonLeonel/HidraApp-FrontEnd',
            ariaLabel: "navega hacia el proyecto alojado en github llamado HidraApp-FrontEnd"
        },
    ],
    backend: [
        {
            nombre: 'Url Shortener',
            iconProject: techForProjects.iconUrlShortenerBack,
            desc: 'API para acortar URLs.',
            img: imgBackend,
            url: 'https://github.com/DonLeonel/urlShortener-backend',
            ariaLabel: "navega hacia el proyecto alojado en github llamado Url Shortener"
        },
        {
            nombre: 'HidraApp',
            iconProject: techForProjects.iconHidraAppBack,
            desc: 'API para la gestión de productos, clientes y facturación.',
            img: imgBackend,
            url: 'https://github.com/DonLeonel/hydraApp',
            ariaLabel: "navega hacia el proyecto alojado en github llamado HydraApp"
        },
        {
            nombre: 'Pase Lista',
            iconProject: techForProjects.iconPaseListaBack,
            desc: 'API para gestionar el registro de asistencia de alumnos.',
            img: imgBackend,
            url: 'https://github.com/DonLeonel/api-pase-lista',
            ariaLabel: "navega hacia el proyecto alojado en github llamado Pase Lista"
        },
    ],
    fullStack: [
        {
            nombre: 'Nexo Birrero (E-Commerce)',
            iconProject: techForProjects.iconNexoBirreroFull,
            desc: 'E-Commerce para la compra de productos relacionados con la cerveza.',
            img: nexoBirrero,
            url: 'https://github.com/DonLeonel/grupo_6_nexoBirrero_E-Commerce',
            ariaLabel: "navega hacia el proyecto alojado en github llamado nexoBirrero"
        }
    ]
}
