module.exports = Object.freeze({
    AUTH_USER: process.env.AUTH_USER,
    AUTH_PASS: process.env.AUTH_PASS,
    AUTH_FROM: "oanapopescu93@gmail.com",

    SECRET_KEY: process.env.SECRET_KEY,
    SECRET_KEY_JWT: "hello friend",

    PAYPAL_MODE: 'sandbox', //sandbox or live
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
    PAYPAL_CLIENT_SECRET: process.env.PAYPAL_CLIENT_SECRET,

    DATABASE: [
        {
            host: 'db4free.net', 
            user: 'oana_popescu_93', 
            password: 'Qazwsxedc123rfv123!',
            database: 'bunnybetdatabase',
            sql: "SELECT * FROM casino_users",
            // multipleStatements: true 
        },
    ],
})