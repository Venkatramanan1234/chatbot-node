require("dotenv").config();

const app = require("./app")

app.listen(3000,() => {
    console.log('Server Running on port 3000')
})