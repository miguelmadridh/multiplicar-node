const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listarTabla(base, limite).then(mensaje => console.log(mensaje)).catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(base, limite).then(mensaje => console.log(mensaje)).catch(err => console.log(err));
        break;
    default:
        break;
}