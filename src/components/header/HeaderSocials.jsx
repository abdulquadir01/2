import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';


export const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://www.linkedin.com/in/abdulquadir01/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/abdulquadir01" target='_blank' rel="noreferrer"><FaGithub/></a>
    </div>
  )
}
