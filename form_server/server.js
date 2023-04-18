const dotenv = require('dotenv');
const mongoose=require('mongoose');

const port = 3050;

dotenv.config({ path: './config.env' });
const app = require('./app');


const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB sucessfully connected!!!!'));
 


const server=app.listen( port||process.env.PORT, () => {
  console.log(`listening on port : ${port}`);
});
