export const api =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : 'https://stormy-atoll-51585.herokuapp.com'
