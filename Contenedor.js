const fs = require('fs');

//lee el archivo
const readFile = async () => {
    await fs.promises.readFile("./productos.txt", "utf-8")
}

//escribe el archivo
const writeData = async (data) => {
    try {
      await fs.promises.writeFile("./productos.txt", JSON.stringify(data, null, 2));
    
    } catch (error) {
      console.log("ERROR DE ESCRITURA", error);
    }
};

//esta en el archivo

const isInArray = (id, array) => {
    return array.some(item => item.id ===id);
};

// creo la clase con sus contructores

class Contenedor {
    constructor() {
      this.file=[];
    }
    async save(object) {

        try {
        
        const productos = await readFile();// ESTA ES EL METODO QUE LEE EL ARCHIVO, osea la part del readfile
        
        const id = productos[productos.length - 1].id + 1;
        
        await fs.promises.writeFile(
        
        this.nombreDelArchivo,
        
        JSON.stringify([...productos, {...object, id: id }])
        
        );
        
        return id;
        
        }
        
        catch (e) {
        
        console.log('No se pudo guardar el objeto '+ e);
        
        }
        
        }



}

let objeto1 = {                                                                                                                                                    
    title: 'Escuadra',                                                                                                                                 
    price: 123.45,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'
}  

let objeto2 =  {                                                                                                                                                    
    title: 'Calculadora',                                                                                                                              
    price: 234.56,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'                                           
}
 
  
let objeto3={                                                                                                                                                    
    title: 'Globo Terráqueo',                                                                                                                          
    price: 345.67,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png'
}  

const main = async() => {
    
    let contenedor=new Contenedor();
    await contenedor.save(objeto3)
    await contenedor.save(objeto2)
    await contenedor.save(objeto1)
}
main()