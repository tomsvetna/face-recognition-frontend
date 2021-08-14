import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Global } from '@emotion/react'

ReactDOM.render(
    <>
        <Global
            styles={{
                '*': { boxSizing: 'border-box' },
                body: {
                    color: 'rgb(255, 255, 255, 0.9)',
                    fontFamily: '"Courier New", Courier, monospace',
                    fontSize: '1.5rem',
                    padding: 0,
                    margin: 0,
                },
                p: {
                    margin: 0,
                },
                input: {
                    color: 'rgb(255, 255, 255, 0.9)',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.23)',
                    borderRadius: 4,
                    fontFamily: '"Courier New", Courier, monospace',
                    fontSize: '1.2rem',
                    height: 48,
                    padding: '0 16px',
                    '&:hover': {
                        border: '1px solid rgba(255, 255, 255, 0.9)',
                    },
                },
            }}
        />
        <App />
    </>,
    document.getElementById('root')
)
