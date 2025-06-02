import SuperheroesRepository from '../repository/superheroesRepository.mjs';
const repository = new SuperheroesRepository();

// Buscar superhéroe por ID
export function obtenerSuperheroePorId(id) {
  const superheroes = repository.obtenerTodos();
  return superheroes.find(hero => hero.id === id);
}

// Buscar superhéroes por atributo y valor
export function buscarSuperheroesPorAtributo(atributo, valor) {
  const superheroes = repository.obtenerTodos();
  return superheroes.filter(hero =>
    String(hero[atributo]).toLowerCase().includes(valor.toLowerCase())
  );
}

// Buscar superhéroes mayores de 30 años, de la Tierra y con al menos 2 poderes
export function obtenerSuperheroesMayoresDe30() {
  const superheroes = repository.obtenerTodos();
  return superheroes.filter(hero =>
    hero.edad > 30 && hero.planetaOrigen === "Tierra" && hero.poder.length >= 2
  );
}
