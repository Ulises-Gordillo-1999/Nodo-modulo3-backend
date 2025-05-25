import path from 'path';

//definir una ruta de archivo de ejemplo 
const filePath = './data/example.txt';

//obtener el directorio base
const dirName = path.dirname(filePath);
console.log('Directorio base:', dirName);

//Obtener el nombre del archivo de extension
const  baseName = path.basename(filePath, 'txt');
console.log('Nombre del archivo:', baseName);

//Obtener la extension del archivo
const extName = path.extname(filePath);
console.log('Extension del archivo:', extName);

//Crear ruta unida
const newPath = path.join('/user','docs', 'newFile.txt');
console.log('Nueva ruta:', newPath)