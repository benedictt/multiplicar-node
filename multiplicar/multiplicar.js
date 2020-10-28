// JavaScript Document

const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
        
    for(let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
    
}

let crearArchivo = (base, limite = 10) => {
	return new Promise((resolve, reject) => {
		
		if(!Number(base)){
			reject(`El valor ${base} no es un número`.red);
			return;
		}
		
		let info = "";

		for(let i = 1; i <= limite; i++){
			info += (`${base} * ${i} = ${base*i}\n`);
		}

		const data = new Uint8Array(Buffer.from(info));
		fs.writeFile(`tablas/tabla_del_${base}.txt`, data, (err) => {
		  if (err) 
			  reject(err)
			else
				resolve(`tabla-${ base }.txt`.green);

		  console.log('El archivo ha sido creado.');
		});
	})
	
	
}

module.exports = {
	crearArchivo,
    listarTabla
}

