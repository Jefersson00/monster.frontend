export class PercorsoFormativoDTO {

    
    
    id : number;

    email : string;

    formazione : string;

    constructor(id: number,email: string, formazione: string) {
        this.email = email;
        this.id = id;
        this.formazione = formazione;
    }
}
