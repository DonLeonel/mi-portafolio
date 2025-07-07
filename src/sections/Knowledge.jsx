import { SectionComp } from '../components/index'
import '../styles/knowledge.css'

export const Knowledge = () => {

  return (    
  
    <SectionComp idSection='conocimientos' title='Conocimientos y Habilidades Técnicas' className='title-sections'>
      <div className='container-knowledge'>

        <div className="knowledge-group">
          <h4>🎨 Frontend</h4>
          <ul>
            <li>HTML5, CSS3, diseño responsive.</li>
            <li>Bootstrap, Tailwind CSS.</li>
            <li>React, Astro.</li>
            <li>Validación de formularios, consumo de APIs, manejo de estado.</li>
          </ul>
        </div>

        <div className="knowledge-group">
          <h4>🛠️ Backend</h4>
          <ul>
            <li>Express.js, NestJS.</li>
            <li>ASP.NET Core, Spring Boot.</li>
            <li>Desarrollo de APIs RESTful.</li>
            <li>Autenticación con JWT y OAuth 2.0.</li>
          </ul>
        </div>

        <div className="knowledge-group">
          <h4>🗄️ Bases de Datos</h4>
          <ul>
            <li>PostgreSQL, MySQL, MongoDB, Oracle.</li>
            <li>Redis (almacenamiento en caché).</li>
          </ul>
        </div>

        <div className="knowledge-group">
          <h4>📦 ORMs y Acceso a Datos</h4>
          <ul>
            <li>Entity Framework Core, Hibernate.</li>
            <li>Sequelize, Prisma.</li>
            <li>ADO.NET.</li>
          </ul>
        </div>

        <div className="knowledge-group">
          <h4>⚙️ Herramientas</h4>
          <ul>
            <li>Git, GitHub, Docker.</li>
            <li>Postman, Swagger.</li>
            <li>Figma para diseño y prototipado.</li>
          </ul>
        </div>

        <div className="knowledge-group">
          <h4>📋 Metodologías</h4>
          <ul>
            <li>Scrum, desarrollo ágil.</li>
            <li>Trabajo colaborativo y buenas prácticas de código.</li>
          </ul>
        </div>

      </div>

      <div className="tech-icons-container">
        {/*Object.entries(icons).map(([name, icon]) => (
          <div className="tech-icon" key={name}>
            <img src={icon} alt={name} title={name} />            
          </div>
        ))*/}
      </div>
    </SectionComp>
  )
}
