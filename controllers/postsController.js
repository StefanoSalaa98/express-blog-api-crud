// importiamo i dati della risorsa
const posts = require('../data/posts');

function index(req, res) {
    // Il posts filtrato di partenza corrisponde a quello originale
    let filteredposts = posts;

    // Se la richiesta contiene un filtro, allora filtro il posts tramite i metodi filter ed includes
    if (req.query.tag) {
        filteredposts = posts.filter(post => {
            // rendo il primo carattere maiuscolo e tutti quelli successivi minuscoli per poter confrontare la stringa con i tag dei posts
            query = req.query.tag[0].toUpperCase()
            for (i = 1; i < req.query.tag.length; i++) {
                query += req.query.tag[i].toLowerCase();
            }
            return post.tags.includes(query)
        });
    }

    // restituisco la variabile filteredposts che contiene il posts filtrato
    res.json(filteredposts);
}

function show(req, res) {
    // recupero l'id dall' URL e lo converto in un numero per poterlo conforntare con gli altri id
    const id = parseInt(req.params.id)

    // cerco il post tramite id
    const post = posts.find(post => post.id === id);

    // Controllo se il post è stato trovato
    if (!post) {

        //Imposto lo status 404
        res.status(404)

        // Restituisco un JSON con le altre informazioni (posso scrivere quello che voglio)
        return res.json({
            error: "Not Found",
            message: "post non trovata"
        })
    }

    // Se sono arrivato fin qui, signfica che il post corrispondente è stato trovato, lo restituisco quindi sotto forma di JSON   
    res.json(post);
}

function store(req, res) {

    const newPost = req.body;

    // Controllo se ho letto il post inviato
    console.log(newPost);
    res.send(newPost);
}

function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
}

function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
}

function destroy(req, res) {
    // recupero l'id dall' URL e lo converto in un numero per poterlo conforntare con gli altri id
    const id = parseInt(req.params.id)

    // cerco il post tramite id
    const post = posts.find(post => post.id === id);

    // // Controllo se il post da eliminare è stato trovato
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "post non trovata"
        })
    }

    // Rimuovo il post dall'elenco dei posts
    posts.splice(posts.indexOf(post), 1);

    // stampo l'elenco dei posts in console per controllare che sia stato eliminato correttamente
    console.log(posts);

    // Restituisco lo status corretto
    res.sendStatus(204)
}

// esporto le funzioni che ho creato
module.exports = { index, show, store, update, modify, destroy }