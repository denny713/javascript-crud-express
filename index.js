const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('Salam');
});

app.listen(7080, () => console.log("Server Berjalan Pada Port 7080"));
