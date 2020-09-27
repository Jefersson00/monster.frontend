import { Injectable } from "@angular/core";
import { AbstractService } from './abstractservice';
import { CittaDTO } from 'src/dto/cittadto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CittaService extends AbstractService<CittaDTO>{

    constructor(http: HttpClient){
        super(http);
        this.type= "citta";
    }
}