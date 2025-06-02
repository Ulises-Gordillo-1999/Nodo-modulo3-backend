import express from 'express';
import {
  obtenerSuperheroePorIdController,
  buscarSuperheroesPorAtributoController,
  obtenerSuperheroesMayoresDe30Controller
} from './controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;

// Rutas solicitadas en el trabajo práctico:
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/edad/mayorA30', obtenerSuperheroesMayoresDe30Controller);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
