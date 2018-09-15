/**
 * requires
 */

const fs = require('fs');
const colors = require('colors');

/*
const fs = require('express'); se puede hacer require de modulos que no son propios dde node pero se instalan
const fs = require('./fs'); de archivos que nosotros mismos hicimos 
*/
/**
    Tablas de multiplicar
 */




let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

            if (!Number(base) || !Number(limite)) {
                reject(`Alguno de los valores introducidos no es numero. Base ${base}, limite ${limite}`);
                return;
            }
            let resultado = 0;
            let data = '';
            for (let i = 1; i <= limite; i++) {
                resultado = base * i;
                data += `${base} * ${i} = ${resultado} \n`;
            }


            fs.writeFile(`tablas/tablas-${base}-al-${limite}.txt`, data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`tablas-${base}-al-${limite}.txt`)
                }

            });


        }

    );

}

listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
            let cadena = '';
            if (!Number(base) || !Number(limite)) {
                reject(`Alguno de los valores introducidos no es numero. Base ${base}, limite ${limite}`);
                return
            }

            console.log("/****************************/".green);
            console.log(`/*** La tabla del ${base} ***/`.green);
            console.log("/****************************/".green);
            for (let i = 0; i <= limite; i++) {
                cadena += `${base} * ${i} = ${base * i} \n`;
            }
            resolve(cadena);
        }

    );
}
module.exports = {
    crearArchivo,
    listarTabla
};