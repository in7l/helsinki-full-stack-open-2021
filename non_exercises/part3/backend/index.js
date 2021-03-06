require('dotenv').config();
const express = require('express');
const cors = require('cors');

const Note = require('./models/note');

const app = express();

// Enable all CORS Requests.
app.use(cors());

app.use(express.json());

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method);
  console.log('Path:', request.path);
  console.log('Body:', request.body);
  console.log('---');
  next();
};

app.use(requestLogger);

app.use(express.static('build'));

app.get('/', (request, response) => {
  response.send('<h1>Hello world</h1>');
});

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes);
  });
});

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0;
  return maxId + 1;
};

app.post('/api/notes', (request, response) => {
  const { body } = request;

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    });
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date()
  });

  note.save().then(savedNote => {
    response.json(savedNote);
  });
});

app.get('/api/notes/:id', (request, response) => {
  const { id } = request.params;
  const note = Note.findById(id).then(note => {
    console.log('note', note);
    if (note) {
      response.json(note);
    } else {
      response.status(404).end();
    }
  });
});

app.delete('/api/notes/:id', (request, response) => {
  const { id } = request.params;
  Note.findByIdAndDelete(id).then(result => {
    response.status(204).end();
  })
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
