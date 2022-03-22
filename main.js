const express = require('express')
const app = express()
const port = 3000

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/test-db-ronald';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

Platillo = require('./models/platillo')

app.get('/', (req, res) => {
    res.send('funciona');
})

app.get('/platillos', async (req, res) => {
    var platillos = await Platillo.find({});
    res.send(platillos);
});

app.put('/platillo/:platillo', async (req, res) => {
    let platillo = await Platillo.findById(req.platillo);
    platillo.nombre = req.body.nombre;
    platillo.receta = req.body.receta;
    await platillo.save();
    res.send(platillo);
})

app.post('/platillo', async (req, res) => {
    let platillo = new Platillo()
    platillo.nombre = req.body.nombre;
    platillo.receta = req.body.receta;
    await platillo.save();
    res.send(platillo);
})


app.delete('/platillo/:platillo', async (req, res) => {
    await Platillo.deleteOne({ _id: req.platillo })
    res.send(platillo)
});

app.listen(port, () => {
    console.log(`test app listening on port ${port}`)
})
