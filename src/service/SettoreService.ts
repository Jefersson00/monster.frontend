import { Injectable } from "@angular/core";
import { AbstractService } from './abstractservice';
import { SettoreDTO } from 'src/dto/SettoreDTO';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SettoreService extends AbstractService<SettoreDTO>{

    constructor(http: HttpClient){
        super(http);
        this.type= "settore";
    }
}