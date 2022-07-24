import './App.css';

const move = () => {
    let x = Math.random() * window.screen.availWidth + 'px';   
    let y = Math.random() * window.screen.availHeight + 'px';

    document.getElementById('fh').style.left = x;
    document.getElementById('fh').style.top = y;
}

const object = () => {
  return(
    <h1 id='fh' onMouseEnter={move} >Hello World</h1>
  )
}

export default object;