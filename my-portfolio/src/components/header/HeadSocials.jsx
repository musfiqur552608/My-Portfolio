import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'

const HeadSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/musfiqur55?_l=en_US" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/musfiqur552608" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/musfiqur.rahman.169067/" target="_blank"><FaFacebookSquare/></a>
    </div>
  )
}

export default HeadSocials