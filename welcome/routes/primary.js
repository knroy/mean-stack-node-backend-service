let primaryRoute = (app, prefix) => {
    let path = prefix ? `${prefix}` : '';
    app.get(`${path}/`, (req, res) => {
        res.send('Welcome to mean stack node backend service');
    })
}

module.exports = primaryRoute;
