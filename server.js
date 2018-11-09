const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '/app/public/home.html'));
// });

// app.get('/survey', function (req, res) {
//     res.sendFile(path.join(__dirname, '/app/public/survey.html'));
// });

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
