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
                {box?.map(item => (
                    <div
                        css={classes.box}
                        style={{
                            top: item.topRow,
                            right: item.rightCol,
                            bottom: item.bottomRow,
                            left: item.leftCol,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default FaceRecognition
