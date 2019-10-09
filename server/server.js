const express = require('express');

const app = express();
const port = 3005;

app.listen(port, () => { console.log(`App be loading up on port ${port}`); });
