import imgLeo from '../assets/Leo.jpg'
import '../styles/about.css'

const __LinkURL = 'https://www.linkedin.com/in/leoneldon/';
const __GithubURL = 'https://github.com/DonLeonel';

export const About = () => (
  <section id='sobreMi' className='sect-about'>
    <div className='avatar-cont'>
      <img className='img' src={imgLeo} alt="Imagen de Leonel F. Don" />
    </div>
    <div className="Links-container-fab">
        <a target='_blank' href={__LinkURL} aria-label='Navegar a Linkeding de Leonel'><i title='Linkedin' className='fab fa-linkedin'></i></a>
        <a target='_blank' href={__GithubURL} aria-label='Navegar a Github de Leonel'><i title='Github' className="fab fa-github"></i></a>        
    </div>
    <div className='about-text'>
      <span className='nombre'>Leonel</span>
      <span className='apellido'> Don</span>
      <p className='parrafo'>
        Soy un estudiante de la Tecnicatura Universitaria en Programación,
        interesado en formar parte de una organización que me brinde la oportunidad
        de potenciar y brindar mis conocimientos y habilidades, para asi alcanzar
        los objetivos de la Organización como también los personales.
      </p>
    </div>
  </section>
)
