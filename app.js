const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(base, limite)
            .then(mensaje => {
                console.log(`Terminada la tabla de multiplicar de la ${base} con un limite de ${limite}`);
            }).catch((err) => {
                console.log(err);
            });
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(base, limite)
            .then(archivo => {
                console.log(`Archivo creado con el nombre: ` + colors.red(archivo))
            }).catch((err) => {
                console.log(err);
            });
        break;

    default:
        console.log('Comando no reconocido');
}

/* et parametro = argv[2];

let base = parametro.split('=')[1]

 */