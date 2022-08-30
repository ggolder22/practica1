//crear clase persona
// crear variables privadas edad, nombre y telefono de la clase persona
// crear gets y sets de cada propiedad
// crear un objeto persona en el main
// utiliza los get y sets para darle valores a la propiedad edad, nombre y telefono, por ultimo muestralas por consola

class Persona {
    constructor(edad,nombre,telefono) {
        this.nombre = nombre,
        this.edad= edad,
        this.telefono = telefono;
    }

    //getter
    get nombre() {
        return this.nombre()
    }

    get edad() {
        return this.edad()
    }

    get telefono() {
        return this.telefono()
    }

    //seter

    set Persona(nombre) {
        this.nombre.push(nombre);
    }

    set Persona(edad) {
        this.nombre.push(edad);
    }

    set Persona(telefono) {
        this.nombre.push(telefono);
    }
}

persona = new Persona();
persona.setnombre("German");
persona.setedad(37);
persona.settelefono(4566511133);

nombre=persona.getnombre();
edad=edad.getedad();
telefono=telefono.gettelefono();

console.log("nombre","edad","telefono");




