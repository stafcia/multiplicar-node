//Filesistem
const fs = require('fs');
var colors = require('colors');


/* 
        
    const express = require('Express');
    const fs = require('./fs') 
*/
let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El Valor introducido de Base: ${base} no es un numero`);
            return;
        } else if (!Number(limite)) {
            reject(`El Valor introducido de Limite: ${limite} no es un numero`);
            return;
        } else {
            console.log('====================================='.green)
            console.log(`=======Tabla del ${base}=================`.green)
            console.log('====================================='.green)
            for (let i = 1; i <= limite; i++) {
                let multipilca = base * i;
                console.log(`${base} * ${i} = ${multipilca}\n`);
                resolve(`Proceso Terminado`)
            }
        }
    })

}
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El Valor introducido ${base} no es un numero`);
            return;
        } else if (!Number(limite)) {
            reject(`El Valor introducido de Limite: ${limite} no es un numero`);
            return;
        } else {
            let data = ``;

            for (let i = 1; i <= limite; i++) {
                let multipilca = base * i;
                data += `${base} * ${i} = ${multipilca}\n`;
            }


            fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
                if (err)
                    reject(err)
                else
                    resolve(`tabla-${base}.txt`)
            });
        }
    })

}

module.exports = {
    crearArchivo,
    listarTabla
}