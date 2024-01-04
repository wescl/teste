import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],
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
export class HabilidadesComponent {
  itens = [
    { nome: 'Angular', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg', mostrar: false },
    { nome: 'Ionic', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg', mostrar: false },
    { nome: 'Firebase', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', mostrar: false },
    { nome: 'JavaScript', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', mostrar: false },
    { nome: 'TypeScript', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', mostrar: false },
    { nome: 'HTML', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', mostrar: false },
    { nome: 'CSS', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', mostrar: false },
    { nome: 'Capacitor', imagem: 'https://www.svgrepo.com/show/353536/capacitorjs-icon.svg', mostrar: false },
    { nome: 'Cordova', imagem: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/apache_cordova_logo_icon_170570.png', mostrar: false },
    { nome: 'PHP', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', mostrar: false },
    { nome: 'Java', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', mostrar: false },
    { nome: 'Python', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', mostrar: false },
    { nome: 'React', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', mostrar: false },
    { nome: 'Ruby', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg', mostrar: false },
    { nome: 'MySQL', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', mostrar: false },
    { nome: 'GitHub', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', mostrar: false },
  ];

  mostrarTexto(item: any) {
    item.mostrar = true;
  }
  
  esconderTexto() {
    this.itens.forEach(item => (item.mostrar = false));
  }
}
