const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Appp runing onport ${port}...`);
});
