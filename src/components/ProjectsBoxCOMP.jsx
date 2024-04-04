import '../styles/projectsBoxCOMP.css'

export const ProjectsBoxCOMP = ({ nombre = 'ProjectName', img , iconProject = null, url, ariaLabel = '' }) => {

    return (
        <a target='_blank' className="box" href={url} aria-label={ariaLabel}>
            <img src={img} alt="img-box" />
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
