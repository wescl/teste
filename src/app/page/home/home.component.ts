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
    const hiddenElements = document.querySelectorAll('.hidden');

    const myObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'show');
          this.renderer.removeClass(entry.target, 'hidden');
          //console.log('Elemento está visível!');
        } else {
          this.renderer.addClass(entry.target, 'hidden');
          this.renderer.removeClass(entry.target, 'show');
          //console.log('Elemento não está visível!');
        }
      });
    });

    hiddenElements.forEach((element) => {
      myObserver.observe(element as HTMLElement);
    });
  }

  scrollToSection() {
    this.secaoAlvo.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  
}
