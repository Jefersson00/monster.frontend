export class UtenteEsperienzaDTO {

    id: number;

    esperienza: number;

    utente: number;

    dataFine: Date;

    dataInizio: Date;

    constructor(id: number, esperienza: number, utente: number, dataFine: Date, dataInizio: Date) {
        this.id = id;
        this.esperienza = esperienza;
        this.utente = utente;
        this.dataFine = dataFine;
        this.dataInizio = dataInizio;
    }

    
}
