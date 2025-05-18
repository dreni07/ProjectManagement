import React from 'react'
import NavBarMain from './NavBarMain'
const MainSection = () => {
    const switch_mode = () => {
        document.documentElement.classList.toggle("dark")
    }

  return (
    <div className="w-full h-full grid grid-rows-[1fr_6fr]">
        <NavBarMain/>
    </div>
  )
}

export default MainSection
