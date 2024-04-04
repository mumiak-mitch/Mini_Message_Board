const express = require('express');
const router = express.Router();

// Sample messages
const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

// GET route for index
router.get('/', (req, res) => {
    res.render('index', { title: 'Message Board', messages: messages });
});

// GET route for new message form
router.get('/new', (req, res) => {
    res.render('form', { title: 'New Message' });
});

// POST route for new message form submission
router.post('/new', (req, res) => {
    const { messageText, messageUser } = req.body;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect('/');
});

module.exports = router;
