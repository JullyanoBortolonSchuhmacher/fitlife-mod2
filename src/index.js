const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(express.json())

try {
    const APP_PORT = process.env.APP_PORT || false

    if (!APP_PORT) {
        throw new Error('As variáveis de ambiente não estão definidas')
    }

    app.listen(APP_PORT, () => {
        console.log(`Servidor Online, na porta ${APP_PORT}`)
    })
} catch (error) {
    console.error(error.message)
}
