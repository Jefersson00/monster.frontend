export class UtenteCompetenzaDTO {

    id: number;

    competenza: number;

    utente: number;

    constructor(id: number, competenza: number, utente: number) {
        this.id = id;
        this.competenza = competenza;
        this.utente = utente;
    }
}
