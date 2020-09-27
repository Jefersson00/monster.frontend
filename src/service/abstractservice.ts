import { Service } from './service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export abstract class AbstractService<DTO> implements Service<DTO> {

    type: string;
    port: string = '8080';
    project: string = '/monster';

    ip: string = 'http://localhost';

    constructor(protected http: HttpClient) {
    }

    getAll(): Observable<DTO[]> {
        return this.http.get<DTO[]>(this.ip + this.port+ this.project + '/' + this.type + '/');
    }

    getById(id: number): Observable<DTO> {
        return this.http.get<DTO>( this.ip + this.port + this.project + '/' + this.type + '/' + id);
    }

    delete(id: number): Observable<any> {
        return this.http.delete( this.ip + this.port + this.project + '/' + this.type + '/' + id);
    }

    insert(dto: DTO): Observable<any> {
        return this.http.post(this.ip + this.port + this.project + '/' + this.type + '/', dto);
    }

    update(dto: DTO): Observable<DTO> {
        return this.http.put<DTO>( this.ip + this.port + this.project + '/' + this.type + '/', dto);

    }

    deleteAll(): Observable<any> {
        return this.http.delete( this.ip + this.port+ this.project + '/' + this.type + '/' )
    }

}