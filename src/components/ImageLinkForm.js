/** @jsxImportSource @emotion/react */

const classes = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        margin: 'auto',
        marginTop: 32,
        maxWidth: 800,
        padding: '0 24px',
    },
    input: {
        flex: 2,
        minWidth: 360,
    },
    button: {
        backgroundColor: '#688EFF',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
        flex: 1,
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        height: 48,
        minWidth: 180,
        '&:hover': {
            backgroundColor: '#4863B2',
            border: 'none',
        },
    },
}

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div css={classes.root}>
            <input
                type="text"
                onChange={onInputChange}
                placeholder="Paste image URL here..."
                css={classes.input}
            />
            <button type="button" onClick={onButtonSubmit} css={classes.button}>
                Detect
            </button>
        </div>
    )
}

export default ImageLinkForm
