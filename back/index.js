const express = require('express')
const app = express()

dotenv.config({ path: ".env" });

const PORT = process.env.PORT

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT)