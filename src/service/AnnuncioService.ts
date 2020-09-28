import { Injectable } from "@angular/core";
import { AbstractService } from './abstractservice';
import { SettoreDTO } from 'src/dto/SettoreDTO';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnnuncioDTO } from 'src/dto/AnnuncioDTO';

@Injectable({
    providedIn: 'root'
})

export class AnnuncioService extends AbstractService<AnnuncioDTO>{

    constructor(http: HttpClient){
        super(http);
        this.type= "annuncio";
    }
}