import React from 'react'
import { render } from 'react-dom'
import App from './client/components/app'

render(<App name='my-portfolio' />, document.querySelector('main'))
console.log('welcome to my-portfolio')
