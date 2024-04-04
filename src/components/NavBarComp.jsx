import '../styles/navbar.css'

export const NavBarCOMP = () => {

  const mostrarMenu = () => {
    const navMenu = document.getElementsByClassName('nav-menu')[0];
    navMenu.classList.toggle("nav-menu_visible");

    const button_menu = document.getElementsByClassName('button-menu')[0]

    if (navMenu.classList.contains('nav-manu_visible')) {

      button_menu.setAttribute('aria-label', 'Cerrar menú');
    }
    else {
      button_menu.setAttribute('aria-label', 'Abrir menú');
    }
  }

  return (
    <header id='top' className='header'>
      <nav className='nav'>
        <button onClick={mostrarMenu} className='button-menu' aria-label='Abrir menú'>
          <h2>Menu</h2>
        </button>
        <ul className="nav-menu" >
          <li className="nav-menu-item">
            <a className="nav-menu-link" href="#sobreMi">Sobre mí</a>
          </li>
          <li className="nav-menu-item">
            <a className="nav-menu-link" href="#proyectos">Proyectos</a>
          </li>
          <li className="nav-menu-item">
            <a className="nav-menu-link" href="#conocimientos">Conocimientos</a>
          </li>
          <li className="nav-menu-item">
            <a className="nav-menu-link" href="#estudios">Estudios</a>
          </li>                   
        </ul>
      </nav>
    </header>
  )
}
