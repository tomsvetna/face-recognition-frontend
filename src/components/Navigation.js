/** @jsxImportSource @emotion/react */

const classes = {
    root: {
        backgroundColor: 'rgba(34, 43, 54, 0.8)',
        display: 'flex',
        height: 64,
        justifyContent: 'flex-end',
        padding: '0 16px',
    },
    link: {
        alignItems: 'center',
        display: 'flex',
        cursor: 'pointer',
        height: '100%',
        padding: '0 24px',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}

const Navigation = ({ onRouteChange, isSignedIn }) => {
    return (
        <nav css={classes.root}>
            {isSignedIn ? (
                <span css={classes.link} onClick={() => onRouteChange('signout')}>
                    Sign Out
                </span>
            ) : (
                <>
                    <span css={classes.link} onClick={() => onRouteChange('signin')}>
                        Sign in
                    </span>
                    <span css={classes.link} onClick={() => onRouteChange('signup')}>
                        Sign up
                    </span>
                </>
            )}
        </nav>
    )
}

export default Navigation
