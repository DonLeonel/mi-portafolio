import { SectionComp, CardStudies } from '../components/index'
import '../styles/studies.css';

export const Studies = () => {
  return (
    <SectionComp idSection='estudios' title={'Estudios'} >
      <div className='container-card-studies'>
        <CardStudies
          titulo={'🎓 Desarrollador Full Stack'}
          institucion={'- Universidad Tecnológica Nacional'}
          duracion={'2021 - Presente'}
        />
        <CardStudies
          titulo={'🎓 Spring Boot 3 y Spring Framework 6.'}
          institucion={'- Udemy - Curso'}
          duracion={'jul. 2024 - sep. 2024'}
        />
        <CardStudies
          titulo={'🎓 Desarrollador FullStack JavaScript'}
          institucion={'- Digital House'}
          duracion={'ago. 2023 - feb. 2024'}
        />

        <div className='subtitulo-estudio-complementario'>
          <h3>Estudio Complementario.</h3>
          <p>Desarrollo artistico y creativo...</p>
        </div>

        <CardStudies
          titulo={'🎓 Compositor, arreglador y productor'}
          institucion={'- Escuela de Música - La Colmena'}
          duracion={'2017 - 2020'}
        />
      </div>
    </SectionComp>
  )
}
