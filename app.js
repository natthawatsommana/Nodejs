const express = require('express');
const morgan = require('morgan');
const app = express();
const port =  3000;

app.get("/", (req,res) => {

    res.send('Hello night');

})

app.listen(port, () =>{
    debug("Listening on port %d", port);

})

