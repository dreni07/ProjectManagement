import React from 'react'
import { Link } from '../constants/types'

interface SimpleLinkProps {
    link_details:Link
    isActiveLink:(link:string) => boolean
}

const SimpleLink = ({link_details,isActiveLink}:SimpleLinkProps) => {
  return (
    <div className={isActiveLink(link_details.link_name) ? `w-full flex justify-between items-center cursor-pointer py-1 my-4 bg-[#dbdbdb] rounded-sm dark:text-black` : `w-full flex justify-between items-center cursor-pointer py-1 my-4`}>
        <i className="material-icons" style={!isActiveLink(link_details.link_name) ? { color:'#b0b0b0',fontSize:"30px",paddingLeft:"10px" } : {color:"#7156b5",fontSize:"30px",paddingLeft:"10px"}}>{link_details.icon_class}</i>
        <h1 className="font-outfit px-2">{link_details.link_name}</h1>
    </div>
  )
}

export default SimpleLink
