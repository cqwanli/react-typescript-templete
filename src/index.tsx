import React from 'react'
import ReactDOM from 'react-dom';
import Demo from './modules/demo'
const render = () => {
    ReactDOM.render(
        <Demo />,
        document.getElementById('app')
    )
}
render()