// Crear una clase persona con las siguientes variables: edad, nombre, telefono

// crear una clase cliente que herede de persona + la variable credito

// crear ahora un objeto de la clase cliente que tenga como propiedades edad, telefono, nombre, credito. Mostrarlos en pantalla

// lo mismo pero con clase trabajador, pero con una variable salario que solo sea para trabajador 

// Crear una clase persona con las siguientes variables: edad, nombre, telefono

class Persona {
    constructor(edad,nombre,telefono) {
        this.nombre = nombre,
        this.edad= edad,
        this.telefono = telefono;
    }
    show() {
        console.log("Persona tiene: " + this.nombre + " " + this.edad + this.telefono)
        console.log(`La persona ${this.nombre} tiene ${this.edad} años y su telefono es:${this.telefono}`)
        
    }
}

class Cliente extends Persona { 
    constructor(edad,nombre,telefono,credito) {
        super(edad,nombre,telefono);
        this.credito = credito;
    }
};



let cliente1 = new Cliente (37,"German",1535631737,-20);
cliente1.show();



class Trabajador extends Persona {
    constructor(edad,nombre,telefono,salario) {
        super(edad,nombre,telefono);
        this.salario = salario;
    }
}

let trabajador1 = new Trabajador (37,"German",1535631737,"USD 5000" );
console.log(trabajador1);

    

    