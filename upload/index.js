let fileUpload = (app) => {
    app.post('/upload', (req, res) => {
        console.log(req.body);
        //console.log(req.files);
        res.send('file upload complete');
    })
}

let Upload = (app) => {
    fileUpload(app);
}

module.exports = Upload;
