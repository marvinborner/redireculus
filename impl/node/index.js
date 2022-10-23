const express = require('express')
const app = express()
const path = require
const static = __dirname + '/../../public'
app.use(express.static(static))
const port = 3000

app.get('/:addr(-?\\d+)', (req, res) => {
	res.sendFile(path.resolve(static + '/exec.html'))
})

app.listen(port, () => {
	console.log(`listening on ${port}`)
})
