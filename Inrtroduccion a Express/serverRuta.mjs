import express from 'express';

//crear una instancia de express
const app = express();

//configurarr el puerto ene l que el servidor escuchara
const PORT = 3000;

app.get('/user/:id', (req, res)=> {
    const userId = req.params.id;
    console.log(`ID del usuario recibido: ${userId}`);
    res.send(`Perfil del usuario con ID: ${userId}`);
})

//iniciar el servidor
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})