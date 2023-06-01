import mongoose from 'mongoose';
import app from './app';
import secret from './config/secret';


const bootstrap = async () => {
  try {
   await mongoose.connect(secret.db_url as string);
   app.listen(secret.port || 4000, () => {
    console.log(`Example app listening on port ${secret.port || 4000}`)
  })
  } catch (err) {
    console.log('database connection failed')
  }
}

bootstrap()