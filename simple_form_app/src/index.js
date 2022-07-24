import React from 'react'
import ReactDOM from 'react-dom'

const workspace = document.querySelector('#root')

const subscribe = <h1 className='text'>Subscribe</h1>
const text = <p className='text'>Sign up with your email address to recieve news and updates.</p>

const input = (
  <div className='inputBox'>
    <input type='text' placeholder='First Name'/>
    <input type='text' placeholder='Last Name'/>
    <input type='email' placeholder='Email'/> 
  </div>
)

const submit = <div className='inputBox'><button>Subscribe</button></div>

const app = (
  <div className='appDiv'>
    {subscribe}
    {text}
    {input}
    {submit}
  </div>
)

ReactDOM.render(app, workspace)