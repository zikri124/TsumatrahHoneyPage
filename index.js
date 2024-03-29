const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.set('views', __dirname+'/views')
app.set('view engine', 'pug')

app.use('/css', express.static(__dirname + '/views/css'));
app.use('/js', express.static(__dirname + '/views/js'));

app.get('/ping', (req, res) => {
    res.send('online')
});

app.get('/', (req, res) => {
	res.render('index')
});

app.get('/beli', (req, res) => {
	res.render('beli')
});

app.get('/mitra', (req, res) => {
	res.render('mitra')
});

app.get('/masukan', (req, res) => {
	res.render('masukan')
});

app.get('/hubungi', (req, res) => {
	res.render('callCentre')
});

app.get('/tentang', (req, res) => {
	res.render('about')
});

app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
    res.status(404).render('message', {message: "Halaman yang kamu cari tidak ditemukan", message2: "404 not found..." })
    const err = new Error("Page not found")
    next(err)
}

function errorHandler(req, res, next) {
    res.status(res.statusCode || 500)
    const message = err.message || "Internal server error"
    res.json({
        "message" : message
    })
}

const server = app.listen(port, () => {
    console.log('Server Online, Listening to port', server.address().port)
})
