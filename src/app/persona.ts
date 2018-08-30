export class Persona {
    public nombre:string;
    public apellido:string;
    public sueldo:number;
    
    constructor(nombre, apellido, sueldo)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.sueldo = sueldo;
    }
    
    public ToString() :string
    {
        return this.nombre+" - "+this.apellido+" - "+this.sueldo;
    }

}
