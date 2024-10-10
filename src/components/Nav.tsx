import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='p-4 bg-blue-300 w-full'>
      <div className="flex items-center justify-between">
        <div className='text-black text-2xl font-bold'>Agnos</div>

        <div className='md:hidden'>
          <button 
            id='menu-toggle' 
            className='text-black'
            onClick={toggleMenu}
          >
            <svg 
              fill='none' 
              stroke='currentColor' 
              strokeLinecap='round' 
              strokeLinejoin='round' 
              strokeWidth='2'
              viewBox='0 0 24 24'
              className='w-6 h-6'
            >
              <path d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button>
        </div>

        <ul className='hidden md:flex space-x-4'>
            <li><Link to='/' className='text-black pl-4'>Finger Pain</Link></li>
            <li><Link to='/abdominal-pain' className='text-black pl-4'>Abdominal Pain</Link></li>
        </ul>
      </div>

      {isMenuOpen ? (
        <ul className={`flex flex-col md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li className='py-2'><Link to='/' className='text-black pl-4'>Finger Pain</Link></li>
          <li className='py-2'><Link to='/abdominal-pain' className='text-black pl-4'>Abdominal Pain</Link></li>
        </ul>
      ) : null}
      
    </nav>
  )
}
