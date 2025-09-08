const express = require('express');
const { nanoid } = require('nanoid');

const app = express();
app.use(express.json());

const urlDatabase = {};

app.post('/shorten', (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  const id = nanoid(7);
  urlDatabase[id] = url;
  res.json({ shortUrl: `http://localhost:3000/${id}` });
});

app.get('/:id', (req, res) => {
  const url = urlDatabase[req.params.id];
  if (url) {
    res.redirect(url);
  } else {
    res.status(404).send('URL not found');
  }
});

app.listen(3000, () => console.log('URL Shortener running on port 3000'));
