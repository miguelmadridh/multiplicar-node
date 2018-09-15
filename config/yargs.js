const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

};

const argv = require('yargs').command('listar', 'Imprime en consola la lista de multiplicar', opt).
command('crear', 'Crea el archivo tablas de multiplicar', opt)
    .help().argv;


module.exports = {
    argv
};