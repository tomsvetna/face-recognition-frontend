/** @jsxImportSource @emotion/react */
import Clarifai from 'clarifai'
import { useState } from 'react'
import Particles from 'react-particles-js'
import FaceRecognition from './components/FaceRecognition'
import ImageLinkForm from './components/ImageLinkForm'
import Introduction from './components/Introduction'
import Navigation from './components/Navigation'
import Signin from './components/SignIn'
import SignUp from './components/SignUp'

const app = new Clarifai.App({
    apiKey: '36adb8ec0f5f4b7882ee093d93c4bffc',
})

const classes = {
    particles: {
        backgroundColor: '#121212',
        bottom: 0,
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        zIndex: -1,
    },
}

const particlesOptions = {
    particles: {
        links: {
            enable: true,
            opacity: 0.5,
        },
        move: {
            enable: true,
        },
        opacity: {
            value: 0.5,
        },
        size: {
            value: 2,
        },
    },
}

const App = () => {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [box, setBox] = useState(null)
    const [route, setRoute] = useState('signin')
    const [isSignedIn, setSignedIn] = useState(false)
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
    })

    const loadUser = ({ id, name, email, entries, joined }) => {
        setImageUrl('')
        setInput('')
        setBox(null)
        setUser({
            id,
            name,
            email,
            entries,
            joined,
        })
    }

    const calculateFaceLocation = data => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
        const image = document.getElementById('inputimage')
        const width = Number(image.width)
        const height = Number(image.height)
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - clarifaiFace.right_col * width,
            bottomRow: height - clarifaiFace.bottom_row * height,
        }
    }

    const displayFaceBox = box => {
        setBox(box)
    }

    const onInputChange = event => {
        setInput(event.target.value)
    }

    const onButtonSubmit = () => {
        setImageUrl(input)
        setBox(null)
        app.models
            .predict('a403429f2ddf4b49b307e318f00e528b', input)
            .then(response => {
                if (response) {
                    fetch('http://localhost:3000/image', {
                        method: 'put',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: user.id,
                        }),
                    })
                        .then(response => response.json())
                        .then(count => {
                            setUser({ ...user, entries: count })
                        })
                }
                displayFaceBox(calculateFaceLocation(response))
            })
            .catch(err => console.log(err))
    }

    const onRouteChange = route => {
        if (route === 'signout') {
            setSignedIn(false)
            setRoute('signin')
            return
        }
        if (route === 'home') {
            setSignedIn(true)
        }
        setRoute(route)
    }

    return (
        <div>
            <Particles css={classes.particles} option={particlesOptions} />
            <Navigation {...{ onRouteChange, isSignedIn }} />
            {route === 'home' ? (
                <>
                    <Introduction name={user.name} entries={user.entries} />
                    <ImageLinkForm {...{ onInputChange, onButtonSubmit }} />
                    <FaceRecognition box={box} imageUrl={imageUrl} />
                </>
            ) : route === 'signin' ? (
                <Signin {...{ loadUser, onRouteChange }} />
            ) : (
                <SignUp {...{ loadUser, onRouteChange }} />
            )}
        </div>
    )
}

export default App
