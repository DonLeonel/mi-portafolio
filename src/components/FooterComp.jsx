import '../styles/footer.css'
import cv from '../pdfs/Cv-LeonelDon.pdf'


export const FooterComp = () => {
  return (
    <footer>
      <div className='opciones-footer'>
        <a href='#' className='button-cv' aria-label='volver hacia arriba'>Ir arriba</a>
        <a download='Cv-LeonelDon.pdf' aria-label='descargar currículum' href={cv} className='button-cv'>Descargar <br /> Currículum</a>
      </div>
      <div className='copirigth'>
        <span><i className="fa-regular fa-copyright"></i><br />Copyright</span>
      </div>
    </footer>
  )
}
