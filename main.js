import './style.css'
import { setup } from './apitest.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Welcome</h1>
    <div id="content"></div>
  </div>
`

setup(document.querySelector('#content'))
