import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Service } from 'src/app/model/service.service';
import { ElementRef } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ggrid',
  templateUrl: './ggrid.component.html',
  styleUrls: ['./ggrid.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.3s ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('.3s ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class GgridComponent implements AfterViewInit, OnInit {

  itens = [
    { nome: 'Ionic', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg', mostrar: false },
    { nome: 'Angular', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg', mostrar: false },
    { nome: 'Firebase', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', mostrar: false },
    { nome: 'TypeScript', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', mostrar: false },
    { nome: 'JavaScript', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', mostrar: false },
    { nome: 'HTML', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', mostrar: false },
    { nome: 'CSS', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', mostrar: false },
    { nome: 'Capacitor', imagem: 'https://www.svgrepo.com/show/353536/capacitorjs-icon.svg', mostrar: false },
  ];

  constructor(
    private service: Service,
    private elementRef: ElementRef,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    const hiddenElementsLeft = this.elementRef.nativeElement.querySelectorAll('.hidden-left');
    const hiddenElementsRight = this.elementRef.nativeElement.querySelectorAll('.hidden-right');

    this.service.observeIntersection(hiddenElementsLeft, 'show', 'hidden-left');
    this.service.observeIntersection(hiddenElementsRight, 'show', 'hidden-right');
  }

  ngOnInit(): void {
    this.scrollTop();
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @ViewChild('motivo') motivo!: ElementRef;
  @ViewChild('video') video!: ElementRef;
  @ViewChild('paginas') paginas!: ElementRef;

  scrollToMotivo() {
    this.motivo.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToVideo(){
    this.video.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToPaginas(){
    this.paginas.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  irHome() {
    this.router.navigate(['/'], {
      state: { animation: 'ggrid' }
    });
  }

}