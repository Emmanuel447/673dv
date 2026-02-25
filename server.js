const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bot is alive!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});

module.exports = app;