import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import SuperheroesDataSource from './superheroesDataSource.mjs';
import Superheroe from '../models/superhero.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class SuperheroesRepository extends SuperheroesDataSource {
  constructor() {
    super();
    this.filePath = path.join(__dirname, '../superheroes.txt');
  }

  obtenerTodos() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      const arr = JSON.parse(data);
      // Convertimos a instancia de la clase Superheroe por si queremos usar métodos extra
      return arr.map(obj => new Superheroe(obj));
    } catch (error) {
      console.error('Error leyendo archivo de superhéroes:', error);
      return [];
    }
  }
}
