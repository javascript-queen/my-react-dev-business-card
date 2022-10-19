import React from 'react'
import profile from "../../img/anna.png"

import './Solo-components.css'

export function Info() {
  return (
    <div>
      <img className='profile' src={profile} alt="profile pic"/>
      <div className="info--center">
        <h1 className='headings'>Anna Traylor</h1>
        <h3 className='grey-text'>React Developer</h3>
        <p className='grey-text'>annagradient.com</p>
        <button >Email</button>
        <button>LinkedIn</button>
      </div>
    </div>
  )
}
