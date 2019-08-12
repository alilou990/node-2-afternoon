const express = require('express');
const ctrlMessages = require('./Controllers/messages_controllers')

const app = express();

app.use(express.json());
app.use(express.static('public' + '/../public/build'))


app.post('/api/messages', ctrlMessages.create);
app.get('/api/messages', ctrlMessages.read);
app.put('/api/messages/:id', ctrlMessages.update);
app.delete('/api/messages/:id', ctrlMessages.delete);

const port = 3001;

app.listen(port, () => {
    console.log('server is up and running')
});