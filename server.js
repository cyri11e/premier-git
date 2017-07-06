const express = require('express')
const app = express();

// route
app.get('/', (req, res) => {
    console.log('Chemin :'+__dirname)
    res.sendFile(__dirname+'/index.html')
})


const port = 8088
app.listen(port, () => console.log('Express listenig on port '+port) )