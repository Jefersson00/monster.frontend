export class CandidaturaDTO {

	

    id: number;

    annuncio : number;

    utente : number;



    constructor(id: number, annuncio: number, utente: number) {
        this.id = id;
        this.annuncio = annuncio;
        this.utente = utente;
    }


}
