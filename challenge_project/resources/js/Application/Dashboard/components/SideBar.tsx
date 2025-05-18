import React from 'react'
import Logo from '../../images/ProjectManagemet.png'
import { Link } from '../constants/types';
import SimpleLink from './SimpleLink';


const SideBar = () => {

    const links:Link[] = [
        {
            link_name:"Dashboard",
            icon_class:"dashboard"
        },

        {
            link_name:"Projects",
            icon_class:"article"
        },

        {
            link_name:"My Tasks",
            icon_class:"task"
        },

        {
            link_name:"Messages",
            icon_class:"mail"
        },

        {
            link_name:"Activities",
            icon_class:"analytics"
        },

        {
            link_name:"Calendar",
            icon_class:"event"
        }

    ]

    const is_active_link = (the_link:string):boolean => {
        const path:string = window.location.pathname;

        const param:string | undefined = path.split("/").at(1);

        return param?.toLowerCase() == the_link.toLowerCase();
    }

  return (
    <div className="h-screen w-full border-r-1 border-r-gray-500">
        <div className="w-full flex items-center">
            <img src={Logo} height="70" width="70"/>
            <p className="font-sora font-bold dark:text-white">ProjeX</p>
        </div>

        <div className="w-full flex justify-center mt-5">
            <div className="w-[75%]">
                {links.map((link:Link) => {
                    return (
                        <SimpleLink link_details={link} isActiveLink={is_active_link}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default SideBar
