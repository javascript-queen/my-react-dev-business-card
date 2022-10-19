import React from 'react'
import { FaInstagram, FaGithub } from 'react-icons/fa'
import './Solo-components.css'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <div className='info--center'>
      <a className='icons' href="https://www.instagram.com/anna_gradient/" rel="noreferrer" target="_blank"><FaInstagram></FaInstagram></a>
      <a className='icons' href="https://github.com/mrs-mars" rel="noreferrer" target="_blank"><FaGithub></FaGithub></a>
      <Link className="link--solo info--center" to="/">
        <h4>React-Course - Solo Project 1</h4>
      </Link>
    </div>
  )
}

