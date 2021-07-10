let fileUpload = (app) => {
    app.get('/upload', (req, res) => {
        res.send('file upload complete');
    })
}

let Upload = (app) => {
    fileUpload(app);
}

module.exports = Upload;
