import { NavBarCOMP } from './components/NavBarComp'
import { FooterComp } from './components/FooterComp'
import { About, Project, Knowledge, Studies } from './sections/index'


export const App = () => {
  return (
    <>
      <NavBarCOMP />
      <About />
      <Project />
      <Knowledge />
      <Studies />           
      <FooterComp/>
    </>
  )
}


