export class AziendaDTO {

    username: string;

    password: string;

    rememberMe: boolean;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}
