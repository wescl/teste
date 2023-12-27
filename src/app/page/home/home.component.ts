import { Component, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements AfterViewInit {

  nome: string = '';
  comentario: string = '';
  itens = [
    { nome: 'Angular', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg', mostrar: false },
    { nome: 'Ionic', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg', mostrar: false },
    { nome: 'Firebase', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', mostrar: false },
    { nome: 'JavaScript', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', mostrar: false },
    { nome: 'TypeScript', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', mostrar: false },
    { nome: 'HTML', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', mostrar: false },
    { nome: 'CSS', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', mostrar: false },
    { nome: 'PHP', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', mostrar: false },
    { nome: 'Java', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', mostrar: false },
    { nome: 'MySQL', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', mostrar: false },
    { nome: 'GitHub', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', mostrar: false },
    { nome: 'Python', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', mostrar: false },
    { nome: 'React', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', mostrar: false },
    { nome: 'Ruby', imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg', mostrar: false },
  ];
  @ViewChild('secaoAlvo') secaoAlvo!: ElementRef;

  constructor(
    private db: AngularFireDatabase,
    private elRef: ElementRef,
    private renderer: Renderer2,
    private router: Router
    ) { }

  adicionarComentario(nome: string, comentario: string) {
    const dataFormatada = new Date().toLocaleString();
    const comentarioData = {
      nome,
      comentario,
      data: dataFormatada
    };

    return this.db.list('/comentarios').push(comentarioData);
  }

  addComentario() {
    if (this.nome && this.comentario) {
      this.adicionarComentario(this.nome, this.comentario)
        .then(() => {
          console.log('Comentário adicionado com sucesso!');
          this.nome = '';
          this.comentario = '';
        })
        .catch(error => console.error('Erro ao adicionar comentário:', error));
    } else {
      console.warn('Preencha todos os campos antes de adicionar um comentário.');
    }
  }

  ngAfterViewInit() {
    const hiddenElements = document.querySelectorAll('.hidden-left');
  
    const myObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'show');
          this.renderer.removeClass(entry.target, 'hidden-left');
  
          // Desconecta o observador após a primeira interseção
          observer.unobserve(entry.target);
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
  
          // Desconecta o observador após a primeira interseção
          observer.unobserve(entry.target);
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
  

  scrollToSection() {
    this.secaoAlvo.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  mostrarTexto(item: any) {
    item.mostrar = true;
  }

  esconderTexto() {
    this.itens.forEach(item => (item.mostrar = false));
  }
}
