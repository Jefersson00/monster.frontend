export class EsperienzaDTO {

	

    id: number;

    descrizione : string;

    nomeAzienda : string;


    constructor(id: number, descrizione: string, nomeAzienda: string) {
        this.id = id;
        this.descrizione = descrizione;
        this.nomeAzienda = nomeAzienda;
    }

}
