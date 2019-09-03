const express = require('express')
const app = express()

const router = require('./router')
//console.log(router)

//Zugriff auf public-Ordner bekannt machen
app.use(express.static('public'))

//express konfigurieren damit es weiss in welchem ordner(2. Parameter) die views sind
app.set('views', 'views')
//die template-engine ejs setzen
app.set('view engine', 'ejs')

// Basis Route und Router setzen, jetzt laufen alle Routes ueber den router
app.use('/', router)

app.listen(3000)