require('dotenv').config();
require('../../../config/db');

const app = require('../../config/app');
const router = require('./routes');

const PORT = process.env.AUTHORS_PORT;

app.use(router);

app.listen(PORT, () => {
  console.log(`Authors service listening on port ${PORT}`);
});

