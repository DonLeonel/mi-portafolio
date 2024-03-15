import '../styles/projectsBoxCOMP.css'
import boxImg from '../assets/boxProyectos.jpg'

export const ProjectsBoxCOMP = ({ nombre = 'ProjectName', iconProject = null, url , ariaLabel=''}) => {

    return (
        <a className="box" href={url} aria-label={ariaLabel}>
            <img src={boxImg} alt="img-box" />
            <div className='info-project'>
                <p className='name-project'>{nombre}</p>
                <div className='icon-project'>
                    {iconProject && iconProject.map((icon, i) =>
                        <img key={i} className='img-tools' src={icon} alt="Icon" />
                    )}
                </div>
            </div>
        </a>
    )
}
