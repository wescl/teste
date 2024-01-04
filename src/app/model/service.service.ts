import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable, NgZone, RendererFactory2, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {

  private renderer: Renderer2;
  
  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private rendererFactory: RendererFactory2, private ngZone: NgZone
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

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

  observeIntersection(elements: NodeListOf<HTMLElement>, classToShow: string, classToHide: string): void {
    const observer = new IntersectionObserver((entries) => {
      this.ngZone.run(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, classToShow);
            this.renderer.removeClass(entry.target, classToHide);
          } else {
            this.renderer.addClass(entry.target, classToHide);
            this.renderer.removeClass(entry.target, classToShow);
          }
        });
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });
  }
}
