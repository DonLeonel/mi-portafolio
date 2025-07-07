import { SectionComp, ProjectsBoxCOMP } from "../components"
import { useState } from 'react'
import { projectsGitHub } from '../utils/projectsGitHub'
import '../styles/project.css'

export const Project = () => {

    const [selectedFilter, setSelectedFilter] = useState('frontend')

    const handleFilterFront = () => setSelectedFilter('frontend')
    const handleFilterBack = () => setSelectedFilter('backend')
    const handleFilterFullStack = () => setSelectedFilter('fullStack')

    // Obtenemos el array de proyectos que se deben renderizar
    const filteredProjects = projectsGitHub[selectedFilter] || []

    return (
        <SectionComp idSection="proyectos" title={'Proyectos en Github'} >

            <ul className='container-filterProjects'>
                <li>
                    <button
                        onClick={handleFilterFront}
                        className={selectedFilter === 'frontend' ? 'active-filter' : ''}
                    >
                        Frontend
                    </button>
                </li>
                <li>
                    <button
                        onClick={handleFilterBack}
                        className={selectedFilter === 'backend' ? 'active-filter' : ''}
                    >
                        Backend
                    </button>
                </li>
                <li>
                    <button
                        onClick={handleFilterFullStack}
                        className={selectedFilter === 'fullStack' ? 'active-filter' : ''}
                    >
                        Full-Stack
                    </button>
                </li>
            </ul>

            <div className='containerBox'>
                {filteredProjects.map((proyecto, i) => (
                    <ProjectsBoxCOMP
                        key={i}
                        nombre={proyecto.nombre}
                        className={proyecto.className ? proyecto.className : ''}
                        iconProject={proyecto.iconProject}
                        desc={proyecto.desc}
                        img={proyecto.img}
                        url={proyecto.url}
                        ariaLabel={proyecto.ariaLabel}
                    />
                ))}
            </div>
        </SectionComp>
    )
}
