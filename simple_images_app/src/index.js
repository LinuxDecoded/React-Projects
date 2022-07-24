import React from 'react'
import ReactDOM from 'react-dom'
import css from './images/css_logo.png'
import html from './images/html_logo.png'
import react from './images/react_logo.png'

const workspace = document.querySelector('#root')

const text = <p className='text'>Front End Technologies</p>

const image = (
  <div className='imageBlock'>
    <div><img className='image' src={css} alt='css_image'/></div>
    <div><img className='image' src={html} alt='html_image'/></div>
    <div><img className='image' src={react} alt='react_image'/></div>
  </div>
)

const app = (
  <div>
    {text}
    {image}
  </div>
)

ReactDOM.render(app, workspace)