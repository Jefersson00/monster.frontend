export class SettoreDTO {

    id: number;

    descrizione: string;

    nome: string;

    constructor(id: number, descrizione: string, nome: string) {
        this.id = id;
        this.descrizione = descrizione;
        this.nome = nome;
    }
}
