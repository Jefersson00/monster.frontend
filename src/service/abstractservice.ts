import { Service } from './service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export abstract class AbstractService<DTO> implements Service<DTO> {

    type: string;
    port: string = '8080';

    ip: string = 'http://localhost';

    constructor(protected http: HttpClient) {
    }

    getAll(): Observable<DTO[]> {
        return this.http.get<DTO[]>(this.ip+':' + this.port + '/' + this.type + '/getall');
    }

    read(id: number): Observable<DTO> {
        return this.http.get<DTO>('http://localhost:' + this.port + '/' + this.type + '/read?id=' + id);
    }

    delete(id: number): Observable<any> {
        return this.http.delete('http://localhost:' + this.port + '/' + this.type + '/delete?id=' + id);
    }

    insert(dto: DTO): Observable<any> {
        return this.http.post('http://localhost:' + this.port + '/' + this.type + '/insert', dto);
    }

    update(dto: DTO): Observable<DTO> {
        return this.http.put<DTO>('http://localhost:' + this.port + '/' + this.type + '/update', dto);

    }

}