const express = require('express');
const app = express();

app.get('/' , (req , res) =>{

    res.status(200).send("Hello Node.js with Express");
})
app.post('/' , (req , res) =>{

    res.status(200).send("This is a post request");
})

app.listen(3000, () => {
    console.log("Express server is listening http://localhost:3000");
})