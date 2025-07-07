import imgLeo from '../assets/imgPerfil/LeoImg.webp'
import { SectionComp } from '../components';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/about.css'

const __LinkURL = 'https://www.linkedin.com/in/leoneldon/';
const __GithubURL = 'https://github.com/DonLeonel';

export const About = () => (
  <SectionComp idSection='sobreMi' className='flex-768px'>
    <div className='avatar-cont'>
      <img className='img' src={imgLeo} alt="Imagen de Leonel F. Don" />
    </div>
    <div className="links-container-fab">
      <a target='_blank' href={__LinkURL} aria-label='Navegar a Linkeding de Leonel'>
        <FaLinkedin size={30} />
      </a>
      <a target='_blank' href={__GithubURL} aria-label='Navegar a Github de Leonel'>
        <FaGithub color='black' size={30} />
      </a>

      <a download='CV-DonLeonelF.pdf' aria-label='descargar currículum' href='/pdfs/CV-DonLeonelF.pdf' className='button-cv'>
        CV <FaDownload size={15} className='icon-download' />
      </a>
    </div>
    <div className='about-text'>
      <span className='nombre'>Leonel</span>
      <span className='apellido'> Don</span>
      <p className='parrafo'>
        Soy un desarrollador con sólida
        formación en programación y experiencia en
        desarrollo. Me destaco por mi responsabilidad,
        organización y enfoque en la eficiencia. 
      </p>
    </div>
  </SectionComp>
)
