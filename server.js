const express = require('express');
const app = express();
app.use(express.json());

module.exports = app;
const PORT = process.env.PORT || 3000
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.listen(PORT, () => {
    console.log(`http server listening on port ${PORT}`)
});