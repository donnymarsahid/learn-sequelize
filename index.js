const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

const indexRouter = require('./src/routes/indexRouter');
app.use('/api/v1', indexRouter);

app.get('/test', (req, res) => {
  res.send('success euyy');
});

app.listen(PORT, () => {
  console.log(`server is ok PORT : ${PORT}`);
});

module.exports = app;
