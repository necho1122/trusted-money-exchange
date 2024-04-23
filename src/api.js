import express from 'express';
import admin from 'firebase-admin';
import { createRequire } from 'module';
const require = createRequire(import.meta.url); // construct the require method
import cors from 'cors';

const serviceAccount = require('./money-exchange-c5232.json'); // Path to your service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
const db = admin.firestore();
app.use(cors())

app.get('/data', async (req, res) => {
  try {
    const querySnapshot = await db.collection('usd-to-other-currency').get();
    const data = [];
    querySnapshot.forEach(doc => {
      data.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener productos' });
  }
});

app.listen(3000, () => {
  console.log('Servidor API escuchando en el puerto 3000');
});