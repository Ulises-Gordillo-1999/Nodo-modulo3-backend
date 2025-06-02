import {
  obtenerSuperheroePorId,
  buscarSuperheroesPorAtributo,
  obtenerSuperheroesMayoresDe30
} from '../services/superheroesService.mjs';
import {
  renderizarSuperheroe,
  renderizarListaSuperheroes
} from '../views/responseView.mjs';

// /superheroes/id/:id
export function obtenerSuperheroePorIdController(req, res) {
  const { id } = req.params;
  const hero = obtenerSuperheroePorId(Number(id));
  if (hero) {
    res.send(renderizarSuperheroe(hero));
  } else {
    res.status(404).send({ mensaje: "Superhéroe no encontrado" });
  }
}

// /superheroes/atributo/:atributo/:valor
export function buscarSuperheroesPorAtributoController(req, res) {
  const { atributo, valor } = req.params;
  const heroes = buscarSuperheroesPorAtributo(atributo, valor);
  if (heroes.length > 0) {
    res.send(renderizarListaSuperheroes(heroes));
  } else {
    res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" });
  }
}

// /superheroes/edad/mayorA30
export function obtenerSuperheroesMayoresDe30Controller(req, res) {
  const heroes = obtenerSuperheroesMayoresDe30();
  res.send(renderizarListaSuperheroes(heroes));
}
