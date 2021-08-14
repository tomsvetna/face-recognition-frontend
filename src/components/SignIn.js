/** @jsxImportSource @emotion/react */
import { useState } from 'react'

export const classes = {
    main: {
        alignItems: 'center',
        display: 'flex',
        height: 'calc(100vh - 64px)',
        justifyContent: 'center',
    },
    form: {
        backgroundColor: 'rgba(34, 43, 54, 0.8)',
        borderRadius: 4,
    },
    fieldset: {
        border: 'none',
        padding: 40,
    },
    legend: {
        paddingBottom: 24,
        paddingTop: 32,
    },
    formField: {
        paddingBottom: 24,
    },
    label: {
        display: 'block',
        fontSize: '1rem',
        paddingBottom: 8,
    },
    input: {
        width: 400,
    },
    submit: {
        backgroundColor: '#688EFF',
        border: 'none',
        color: 'black',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginTop: 24,
        width: 400,
        '&:hover': {
            backgroundColor: '#4863B2',
            border: 'none',
        },
    },
}

const SignIn = ({ loadUser, onRouteChange }) => {
    const [formValues, setFormValues] = useState({ signInEmail: '', signInPassword: '' })

    const handleChange = event => {
        const { name } = event.target
        const { value } = event.target
        setFormValues(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = event => {
        event.preventDefault()
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: formValues.signInEmail,
                password: formValues.signInPassword,
            }),
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    loadUser(user)
                    onRouteChange('home')
                }
            })
    }

    return (
        <main css={classes.main}>
            <form css={classes.form}>
                <fieldset css={classes.fieldset}>
                    <legend css={classes.legend}>Sign in</legend>
                    <div css={classes.formField}>
                        <label htmlFor="signInEmail" css={classes.label}>
                            Email
                        </label>
                        <input
                            type="email"
                            name="signInEmail"
                            id="signInEmail"
                            value={formValues.signInEmail}
                            onChange={handleChange}
                            css={classes.input}
                            autoComplete="off"
                        />
                    </div>
                    <div css={classes.formField}>
                        <label htmlFor="signInPassword" css={classes.label}>
                            Password
                        </label>
                        <input
                            type="password"
                            name="signInPassword"
                            id="signInPassword"
                            value={formValues.signInPassword}
                            onChange={handleChange}
                            css={classes.input}
                        />
                    </div>
                    <div>
                        <input
                            onClick={handleSubmit}
                            type="submit"
                            value="Sign in"
                            css={classes.submit}
                        />
                    </div>
                </fieldset>
            </form>
        </main>
    )
}

export default SignIn
