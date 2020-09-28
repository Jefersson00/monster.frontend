import { Injectable } from '@angular/core';
import { AbstractService } from './abstractservice';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from 'src/dto/logindto';
import { Observable } from 'rxjs';
import { UtenteDTO } from 'src/dto/UtenteDTO';

@Injectable({
  providedIn: 'root'
})
export class UtenteService extends AbstractService<UtenteDTO>{

  constructor(http: HttpClient) {
    super(http);
    this.type= "utente";
  }

  login(loginDTO: LoginDTO): Observable<UtenteDTO> {
    return this.http.post<any>(this.ip + this.port+ this.project + '/' + this.type + '/login', loginDTO)
  }

}
