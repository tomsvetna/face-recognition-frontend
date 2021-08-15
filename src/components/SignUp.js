/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { api } from '../api'
import { classes } from './SignIn'

const SignUp = ({ loadUser, onRouteChange }) => {
    const [formValues, setFormValues] = useState({
        signUpEmail: '',
        signUpPassword: '',
        signUpName: '',
    })

    const handleChange = event => {
        const { name } = event.target
        const { value } = event.target
        setFormValues(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = event => {
        event.preventDefault()
        fetch(`${api}/signup`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: formValues.signUpEmail,
                password: formValues.signUpPassword,
                name: formValues.signUpName,
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
                    <legend css={classes.legend}>Sign up</legend>
                    <div css={classes.formField}>
                        <label htmlFor="signUpName" css={classes.label}>
                            Name
                        </label>
                        <input
                            type="text"
                            name="signUpName"
                            id="signUpName"
                            value={formValues.signUpName}
                            onChange={handleChange}
                            css={classes.input}
                            autoComplete="off"
                        />
                    </div>
                    <div css={classes.formField}>
                        <label htmlFor="signUpEmail" css={classes.label}>
                            Email
                        </label>
                        <input
                            type="email"
                            name="signUpEmail"
                            id="signUpEmail"
                            value={formValues.signUpEmail}
                            onChange={handleChange}
                            css={classes.input}
                            autoComplete="off"
                        />
                    </div>
                    <div css={classes.formField}>
                        <label htmlFor="signUpPassword" css={classes.label}>
                            Password
                        </label>
                        <input
                            type="password"
                            name="signUpPassword"
                            id="signUpPassword"
                            value={formValues.signUpPassword}
                            onChange={handleChange}
                            css={classes.input}
                        />
                    </div>
                    <div>
                        <input
                            onClick={handleSubmit}
                            type="submit"
                            value="Sign up"
                            css={classes.submit}
                        />
                    </div>
                </fieldset>
            </form>
        </main>
    )
}

export default SignUp
