export const api =
    process.env.REACT_APP_ENV === 'production'
        ? 'https://stormy-atoll-51585.herokuapp.com'
        : 'http://localhost:3000'
