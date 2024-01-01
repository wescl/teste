import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
  ) { }

  getIpAddress(): Observable<any> {
    return this.http.get('https://ipapi.co/json/');
  }

  adicionarIp(ip: string, city: string, regiao: string, country: string) {
    return this.db.list('/visualizacao', ref => ref.orderByChild('ip').equalTo(ip))
      .valueChanges()
      .subscribe(existingRecords => {
        if (existingRecords.length === 0) {
          const dataFormatada = new Date().toLocaleString();
          const comentarioData = {
            ip,
            city,
            regiao,
            country,
            data: dataFormatada
          };
          return this.db.list('/visualizacao').push(comentarioData);
        } else {
          return;
        }
      });
  }
}
