import { ProjectsBoxCOMP } from "../components/ProjectsBoxCOMP"
import '../styles/project.css'
import cSharp from '../assets/cSharp.ico';
import postgre from '../assets/postgre.ico';
import expressJs from '../assets/ExpressJS.ico'
import nodeJS from '../assets/nodeJS.ico'
import mySql from '../assets/mySql.ico'

const iconAltaPedidos = [cSharp, postgre];
const iconEmpleadosApp = [cSharp, postgre];
const iconNexoBirrero = [nodeJS, expressJs, mySql]

export const Project = () => {
    return (
        <section className="section" id='proyectos'>
            <h2 className="h2-subtitulos" >Proyectos en Github<span className="punto">.</span></h2>
            <div className='containerBox'>
                <ProjectsBoxCOMP
                    nombre='EmpleadosApp'
                    iconProject={iconEmpleadosApp}
                    url='https://github.com/DonLeonel/EmpleadosAPP.git'
                    ariaLabel="navega hacia el proyecto alojado en github llamado empleados App"
                />
                <ProjectsBoxCOMP
                    nombre='Alta-Pedidos (Maest-Detlle)'
                    iconProject={iconAltaPedidos}
                    url='https://github.com/DonLeonel/AltaPedidos-MaestroDetalle'
                    ariaLabel="navega hacia el proyecto alojado en github llamado Alta pedidos (maestro detalle)"
                />
                <ProjectsBoxCOMP
                    nombre='nexoBirrero (E-Comm)'
                    iconProject={iconNexoBirrero}
                    url='https://github.com/DonLeonel/grupo_6_nexoBirrero_E-Commerce'
                    ariaLabel="navega hacia el proyecto alojado en github llamado nexo Birrero"
                />                
            </div>
        </section>
    )
}
