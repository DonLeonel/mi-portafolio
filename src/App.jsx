import { NavBarCOMP } from './components/NavBarComp'
import { FooterComp } from './components/FooterComp'
import { About, Project, Knowledge, Studies, Header, Certifications } from './sections/index'

export const App = () => {
  return (
    <>
      <NavBarCOMP />
      <Header />
      <Project />
      <Knowledge />
      <About />
        <Studies />
      {/*<div className='cont-sections-studies-certifications'>
        <Certifications />
      </div>*/}
      <FooterComp />
    </>
  )
}


