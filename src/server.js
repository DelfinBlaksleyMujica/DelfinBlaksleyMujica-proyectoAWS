const express = require("express");
const app = express();

const { ProductRouter } = require("./routes/products.routes");

const PORT = process.env.PORT || 8080;

const server = app.listen( PORT , () => console.log( `Listening on server ${ PORT } `));
server.on( "error" , () => console.log( error ) );

app.get("/" , ( req , res ) => {
    res.send("Welcome to aws with nodeJs");
})

app.use("/api/products" , ProductRouter );