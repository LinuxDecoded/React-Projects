import React from 'react'
import ReactDOM from 'react-dom'

const root = document.querySelector('#root')
const hexArr = []
const hexColor = () => {
  const str = '0123456789abcdef'
  let hex = ''
  let index
  for(let i=0; i<6; i++){
    index = Math.floor((Math.random() * str.length))
    hex += str[index]
  }
  return  '#' + hex
}

const styleArr = []
for(let i=0; i<5; i++) {
  let color = hexColor()
  styleArr[i] = {
    backgroundColor: color,
    fontFamily: 'Montserrat'
  }
  hexArr[i] = color
}

const ColorDiv = () => {
  return (
    <div>
      <div style={styleArr[0]}>
        <h1>{hexArr[0]}</h1>
      </div>
      <div style={styleArr[1]}>
        <h1>{hexArr[1]}</h1>
      </div>
      <div style={styleArr[2]}>
        <h1>{hexArr[2]}</h1>
      </div>
      <div style={styleArr[3]}>
        <h1>{hexArr[3]}</h1>
      </div>
      <div style={styleArr[4]}>
        <h1>{hexArr[4]}</h1>
      </div>
    </div>
  )
}

ReactDOM.render(<ColorDiv />, root)