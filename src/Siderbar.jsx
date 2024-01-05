import logo from '../src/assets/logo.svg'
import { socials, links } from './data.jsx'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context.jsx'
import './App.css'
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-header'>
        <img src={logo} alt='coding addict' className='logo' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link
          return (
            <li key={id}>
              <a href={url} className={id}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='social-links'>
        {socials.map((link) => {
          const { id, url, icon } = link
          return (
            <li key={id}>
              <a href={url} className={id}>
                {icon} 
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
export default Sidebar
