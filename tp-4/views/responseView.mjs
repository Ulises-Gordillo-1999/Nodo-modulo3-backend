// Devuelve un superhéroe en JSON
export function renderizarSuperheroe(superheroe) {
  return JSON.stringify(superheroe, null, 2);
}

// Devuelve una lista de superhéroes en JSON
export function renderizarListaSuperheroes(superheroes) {
  return JSON.stringify(superheroes, null, 2);
}
