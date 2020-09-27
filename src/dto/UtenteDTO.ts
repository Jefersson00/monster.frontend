export class UtenteDTO {

    id: number;

    cognome: string;

    cv: string;

    dataNascita: Date;

    email: string;

    nome: string;

    password: string;

    telefono: string;

    constructor(id: number, cognome: string, cv: string, dataNascita: Date, email: string, nome: string, password: string, telefono: string) {
        this.id = id;
       this.cognome = cognome;
       this.cv = cv;
       this.dataNascita = dataNascita;
       this.email = email;
       this.nome = nome;
       this.password = password;
       this.telefono = telefono;
    }
}
