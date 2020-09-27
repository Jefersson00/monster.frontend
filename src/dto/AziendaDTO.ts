export class AziendaDTO {

	

    id: number;

    annoFondazione : Date;

    descrizione : string;

    email: string;

    link : string;

    logo : string;

    nome: string;
    
    numeroDipendenti : number;

    password : string;

    settore: string;

    constructor(id: number, annoFondazione: Date, descrizione: string,email: string, link: string, logo: string, nome: string,numeroDipendenti: number,password : string,settore : string) {
        this.id = id;
        this.annoFondazione = annoFondazione;
        this.descrizione = descrizione;
        this.email = email;
        this.link = link;
        this.logo = logo;
        this.nome = nome;
        this.numeroDipendenti = numeroDipendenti;
        this.password = password;
        this.settore = settore;
    }



	
}
