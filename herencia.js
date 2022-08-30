
var cocheElectrico = new CocheElectrcico();
var miCoche = new Coche();
Coche.velocidadMaxima = 14;
Coche.matricula ="ABC 134 ES"


class Vehiculo {
    constructor(velocidadMaxima, matricula) {
        this.velocidadMaxima = velocidadMaxima;
        this.matricula = matricula;
    }
}


class Coche extends Vehiculo{};

class CocheEletrcico extends Coche {};


