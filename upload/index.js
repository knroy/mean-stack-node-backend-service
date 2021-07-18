const multer = require('multer');
const fs = require('fs');
const upload = multer({dest: 'files/'});
const express = require('express');

let fileUpload = (app) => {

    const multerUpload = upload.single('photo');

    app.post('/upload', multerUpload, (req, res) => {

        let originalName = req.file.originalname;
        let fileName = req.file.filename;
        let currentFilePath = req.file.path;

        let newFilePath = `files/${fileName}-${originalName}`;

        fs.rename(currentFilePath, newFilePath, (error) => {
            if (error) {
                res.send('file upload failed');
            } else {
                res.send('file upload complete');
            }
        });
    })
}

let filePreview = (app) => {
    app.use('/images', express.static('files/'));
}

let Upload = (app) => {
    fileUpload(app);
    filePreview(app);
}

module.exports = Upload;
