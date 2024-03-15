import '../styles/studies.css'

export const Studies = () => {
  return (
    <section className='section' id='estudios'>
      <h2 className='h2-subtitulos'>Estudios<span className="punto">.</span></h2>
      <br />
      <div className="modulo-estudio">
        <h3 className="establecimiento margenes">Digital House (curso)</h3>
        <div className="titulo margenes">Desarrollador Full-Stack (Js)</div>
        <div className="container-duracion">
          <span className="duracion"> Agosto 2023 - Presente </span>
        </div>
      </div>
      <div className='separador'>
        <hr />
      </div>
      <div className="modulo-estudio">
        <h3 className="establecimiento margenes">Universidad Tecnológica Nacional</h3>
        <div className="subtitulo margenes">Tecnicatura Unversitaria en Programación</div>
        <div className='titulo margenes'>Desarrollador Full-Stack</div>
        <div className="container-duracion">
          <span className="duracion">2022 - Presente</span>
        </div>
      </div>
      <div className='separador'>
        <hr />
      </div>
      <div className="modulo-estudio">
        <h3 className="establecimiento margenes">Escuela de Música - La Colmena</h3>
        <div className="titulo margenes">Compositor, arreglador y productor</div>
        <div className="container-duracion">
          <span className="duracion"> 2017 - 2020 </span>
        </div>
      </div>     
    </section>
  )
}
