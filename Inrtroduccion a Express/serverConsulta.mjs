import express from 'express';

//crear una instancia de express
const app = express();

//configurarr el puerto ene l que el servidor escuchara
const PORT = 3000;


app.get('/profile', (req, res)=> {
    const edad = req.query.edad;
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del perfil: ${edad}`);
})

//iniciar el servidor
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})