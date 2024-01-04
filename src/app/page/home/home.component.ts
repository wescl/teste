import { Component, AfterViewInit, ElementRef, ViewChild, Output, EventEmitter, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Service } from 'src/app/model/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.3s ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('.1s ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})

export class HomeComponent implements AfterViewInit, OnInit {

  @Output() scrollEvent = new EventEmitter<void>();
  aviso: boolean = false;
  texto: string = "";
 
  constructor(
    private service: Service,
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {
    this.getIpAddress();
    //this.scrollTop();
  }

  ngAfterViewInit() {
    const hiddenElementsLeft = this.elementRef.nativeElement.querySelectorAll('.hidden-left');
    const hiddenElementsRight = this.elementRef.nativeElement.querySelectorAll('.hidden-right');

    this.service.observeIntersection(hiddenElementsLeft, 'show', 'hidden-left');
    this.service.observeIntersection(hiddenElementsRight, 'show', 'hidden-right');
  }

  @ViewChild('competencias') competencias!: ElementRef;
  @ViewChild('projetos') projetos!: ElementRef;
  @ViewChild('sobre') sobre!: ElementRef;
  @ViewChild('contato') contato!: ElementRef;

  scrollToCompetencias() {
    this.competencias.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToProjetos() {
    this.projetos.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToSobre(){
    this.sobre.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContato(){
    this.contato.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async toast(texto: string) {
    this.texto = texto;
    this.aviso = true;
    await this.delay(2000);
    this.aviso = false;
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getIpAddress(): void {
    this.service.getIpAddress().subscribe((data) => {
      this.service.adicionarIp(data.ip, data.city, data.region, data.country_name)
    });
  }
  
}
