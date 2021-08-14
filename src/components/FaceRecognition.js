/** @jsxImportSource @emotion/react */

const classes = {
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    root: {
        display: 'inline-flex',
        margin: 'auto',
        marginTop: 64,
        position: 'relative',
    },
    box: {
        border: '3px solid #149df2',
        position: 'absolute',
    },
}

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div css={classes.container}>
            <div css={classes.root}>
                <img id="inputimage" alt="" src={imageUrl} width="500px" height="auto" />
                {box && (
                    <div
                        css={classes.box}
                        style={{
                            top: box.topRow,
                            right: box.rightCol,
                            bottom: box.bottomRow,
                            left: box.leftCol,
                        }}
                    ></div>
                )}
            </div>
        </div>
    )
}

export default FaceRecognition
