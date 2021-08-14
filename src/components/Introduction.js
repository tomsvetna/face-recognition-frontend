/** @jsxImportSource @emotion/react */
import { ReactComponent as Brain } from '../assets/brain.svg'

const classes = {
    root: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1.2rem',
        marginTop: 32,
        padding: '0 24px',
    },
    p: {
        marginTop: 24,
        textAlign: 'center',
    },
}

const Introduction = ({ name, entries }) => {
    return (
        <div css={classes.root}>
            <Brain />
            <p css={classes.p}>
                This Magic Brain will detect faces in your pictures. Give it a try.
            </p>
            <p css={classes.p}>{`${name}, your current entry count is ${entries ?? 0}.`}</p>
        </div>
    )
}

export default Introduction
