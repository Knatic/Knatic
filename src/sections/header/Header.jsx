import { useEffect } from 'react'
import HeaderImage from '../../assets/header.jpeg'
import data from './data'
import './header.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile"  data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos="fade-up">Kumar Krishav</h3>
        <p  data-aos="fade-up">
        A highly motivated under graduate, who is passionate about making new technologies and eager to learn new technical advancements, looking for
opportunites in the field of Embedded Systems. Experience working with microcontroller, firmware, sensors, with a good understanding of Embedded
Software design. 
        </p>
        <div className="header__cta"  data-aos="fade-up">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header