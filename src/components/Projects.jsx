import React from 'react'
import ProjectCard from '../common/ProjectCard'
import camera from "../assets/Camera-Gallery.png"
import chat from "../assets/Chat-App.png"

export const Projects = () => {
  const title = `projects`
  const projdata = () => ([
   
    {
      title:'Camera-Gallery',
      subtitle:"A Camera-Gallery Application Where User Can Capture Photos And Videos.The User Can Also Download The Recorded Videos And Photos From The Gallery Section",
      demo:"https://amareshvarma.github.io/gallery/",
      source:"https://github.com/amareshvarma/gallery",
      duration:"1 year",
      src:camera
    },
    {
      title:'Bhat-Chit',
      subtitle:"Chat-Application Which allows user to create account and login.After Login user can send messages to other users in real time",
      demo:"https://boisterous-bublanina-c9f23a.netlify.app/",
      source:"https://github.com/amareshvarma/mern-chat-backend",
      duration:"1 year",
      src:chat
    }
  ])
  return (
    <div className="px-4 flex-col w-full uppercase h-full">
      <h2 className="text-xl font-bold pb-4">{title}</h2>
     <div className='px-4 flex flex-col md:flex-row w-full '>
     {projdata().map((e,i)=><ProjectCard {...e} key={i} />)}
     </div>
    </div>
  )
}
