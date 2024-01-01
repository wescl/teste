import { Component, AfterViewInit, ElementRef, Renderer2, ViewChild, Output, EventEmitter, OnInit } from '@angular/core';
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
    private renderer: Renderer2,
    private service: Service
  ) { }

  ngOnInit(): void {
    this.getIpAddress();
  }

  ngAfterViewInit() {
    const hiddenElements = document.querySelectorAll('.hidden-left');

    const myObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'show');
          this.renderer.removeClass(entry.target, 'hidden-left');
          //observer.unobserve(entry.target);
        } else {
          this.renderer.addClass(entry.target, 'hidden-left');
          this.renderer.removeClass(entry.target, 'show');
        }
      });
    });

    hiddenElements.forEach((element) => {
      myObserver.observe(element as HTMLElement);
    });

    const hiddenElements2 = document.querySelectorAll('.hidden-right');

    const myObserver2 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'show');
          this.renderer.removeClass(entry.target, 'hidden-right');
          //observer.unobserve(entry.target);
        } else {
          this.renderer.addClass(entry.target, 'hidden-right');
          this.renderer.removeClass(entry.target, 'show');
        }
      });
    });

    hiddenElements2.forEach((element) => {
      myObserver2.observe(element as HTMLElement);
    });
  }

  @ViewChild('competencias') competencias!: ElementRef;
  @ViewChild('projetos') projetos!: ElementRef;

  scrollToCompetencias() {
    this.competencias.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToProjetos() {
    this.projetos.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToMensagem() {
    this.scrollEvent.emit();
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
