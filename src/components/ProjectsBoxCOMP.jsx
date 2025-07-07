import '../styles/comp/projectsBoxCOMP.css';

export const ProjectsBoxCOMP = ({ nombre = 'Nombre Proyecto', className = '', img, iconProject = null, desc, url, ariaLabel = '' }) => {

    return (
        <a target='_blank' className={`box ${className}`} href={url} aria-label={ariaLabel}>
            <img src={img} alt="img-box" />
            <div className='info-project'>
                <p className='name-project'>{nombre}</p>
                <div className='icon-project'>
                    {iconProject && iconProject.map((icon, i) =>
                        <img key={i} className='img-tools' src={icon} alt="Icon" />
                    )}
                </div>
                <p className='desc'>{desc}</p>
            </div>
        </a>
    )
}
