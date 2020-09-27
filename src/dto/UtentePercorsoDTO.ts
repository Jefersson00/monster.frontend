export class UtentePercorsoDTO {

    id: number;

    percorsoFormativo: number;

    utente: number;

    constructor(id: number, percorsoFormativo: number, utente: number) {
        this.id = id;
        this.percorsoFormativo = percorsoFormativo;
        this.utente = utente;
    }
}
