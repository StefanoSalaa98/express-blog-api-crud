// importo il framework express
const express = require("express");

// creo una istanza di express
const app = express();

// imposto il numero della porta
const port = 3000;

// registro il body-parser per "application/json"
app.use(express.json());

// importo il modulo del router per i posts
const postRouter = require("./routers/RouterPosts.js")

// uso il middleware static di express per rendere disponibile i file statici
app.use(express.static('public'));

// rotte per i posts
app.use("/posts", postRouter);

// imposto la rotta di home
app.get("/", (req, res) => {
    res.send('<h1> Server del mio blog </h1>')
})

// metto in ascolto il server sulla porta definita
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});