export class AnnuncioDTO {

	

    id: number;

    descrizione : string;

    contratto: string;

    dataPubblicazione : Date;

    sede : number;

    settore : number;


    constructor(id: number, descrizione: string, contratto: string, dataPubblicazione: Date, sede: number, settore: number) {
        this.id = id;
        this.descrizione = descrizione;
        this.contratto = contratto;
        this.dataPubblicazione = dataPubblicazione;
        this.sede = sede;
        this.settore = settore;
    }

}
