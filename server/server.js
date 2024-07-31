const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const notesDirPath = path.join(__dirname, 'notes_storage');

// Ensure the notes_storage directory exists
if (!fs.existsSync(notesDirPath)) {
  fs.mkdirSync(notesDirPath);
}

// Endpoint to fetch notes
app.get('/api/notes', (req, res) => {
  fs.readdir(notesDirPath, (err, files) => {
    if (err) {
      console.error('Error reading notes directory:', err);
      res.status(500).json({ message: 'Failed to read notes directory' });
    } else {
      const notes = {};

      files.forEach((file) => {
        const filePath = path.join(notesDirPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const [category, id] = file.split('_');
        const note = { id, content: fileContent, title: file.replace('.md', '').split('_').slice(2).join('_') };

        if (!notes[category]) {
          notes[category] = [];
        }
        notes[category].push(note);
      });

      res.json(notes);
    }
  });
});

// Endpoint to save a new note
app.post('/api/notes', (req, res) => {
  const { category, id, title, content } = req.body;
  const fileName = `${category}_${id}_${title.replace(/\s+/g, '_')}.md`;
  const filePath = path.join(notesDirPath, fileName);

  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      console.error('Error writing note file:', err);
      res.status(500).json({ message: 'Failed to write note file' });
    } else {
      res.status(201).json({ message: 'Note saved successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
