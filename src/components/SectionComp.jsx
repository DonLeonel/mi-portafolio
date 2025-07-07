import '../styles/comp/sectionComp.css';

export const SectionComp = ({ idSection = '', title = null, children, className = '' }) => {

    return (
        <section id={idSection} className={`conteiner-section ${className}`}>
            {title &&
                <h2 className="title-section">
                    {title}
                    <span className="punto">.</span>
                </h2>
            }
            {children}
        </section>
    )
}