const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://devgabriel:devgabriel@cluster0-hsjrs.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.get('/users', (request, response) => {
    console.log(request.query);
    return response.json({ message: 'Hello World' });
})
app.listen(3333);