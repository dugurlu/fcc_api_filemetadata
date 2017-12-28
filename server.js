// init project
const express = require('express');
const app = express();
const fs = require('fs')

const multer = require('multer')
const upload = multer({dest: 'uploads/'})

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post("/upload", upload.single('file'), (req, res) => {
  fs.unlink(req.file.path, (err) => {
    if (err) res.json(err)
    res.json({'size': req.file.size})
  })
})

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
