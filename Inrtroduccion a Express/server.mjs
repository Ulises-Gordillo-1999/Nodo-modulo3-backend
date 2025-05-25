import express from 'express';

//crear una instancia de express
const app = express();

//configurarr el puerto ene l que el servidor escuchara
const PORT = 3000;

//ruta basica
app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.get('/data', (req, res) =>{
    res.send('Datos recibidos');
})

//iniciar el servidor
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})