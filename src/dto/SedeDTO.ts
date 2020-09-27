export class SedeDTO {

    id: number;

    citta: string;

    regione: string;

    azienda: number;

    constructor(id: number, citta: string, regione: string, azienda: number) {
        this.id = id;
        this.citta = citta;
        this.regione = regione;
        this.azienda = azienda;
    }
}
