// Clase abstracta: asegura contrato para cualquier fuente de datos
export default class SuperheroesDataSource {
  obtenerTodos() {
    throw new Error('Este método debe ser implementado por la subclase');
  }
}
