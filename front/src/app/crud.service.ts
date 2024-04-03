import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CrudService {
  private apiUrl = "http://localhost:8090/";
  constructor(private http: HttpClient) {}

  public post(serviceName: string, entity: any) {
    return this.http.post(this.apiUrl + serviceName, entity, { responseType: 'blob' });
  }

}
