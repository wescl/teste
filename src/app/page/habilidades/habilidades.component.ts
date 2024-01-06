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
    { nome: 'AWS', imagem: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', mostrar: false },
    { nome: 'MongoDB', imagem: 'https://www.svgrepo.com/show/331488/mongodb.svg', mostrar: false },
    { nome: 'Laravel', imagem: 'https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png', mostrar: false },
    { nome: 'Vue', imagem: 'https://static-00.iconduck.com/assets.00/vue-icon-2048x1766-ntogpmti.png', mostrar: false },
    { nome: 'Svelte', imagem: 'https://raw.githubusercontent.com/sveltejs/svelte/29052aba7d0b78316d3a52aef1d7ddd54fe6ca84/site/static/images/svelte-android-chrome-512.png', mostrar: false },
    { nome: 'Bootstrap', imagem: 'https://camo.githubusercontent.com/b872b9ada0c2c3d373bbb0c356eb4af353127335fc3d2e611964433864ab4de1/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67', mostrar: false },
  ];

  mostrarTexto(item: any) {
    item.mostrar = true;
  }
  
  esconderTexto() {
    this.itens.forEach(item => (item.mostrar = false));
  }
}
