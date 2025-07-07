import '../styles/comp/cardStudies.css';

export const CardStudies = ({ institucion, titulo, duracion }) => {
  return (
    <article className="card-estudio">
      <h1 className="titulo">{titulo}</h1>
      <p className="establecimiento">{institucion}</p>
      <p className="duracion">
        <span> {duracion} </span>
      </p>
    </article>
  )
}
