import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enviar-mensagem',
  templateUrl: './enviar-mensagem.component.html',
  styleUrls: ['./enviar-mensagem.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.2s ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('.3s ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})

export class EnviarMensagemComponent {

  mensagem: string = "";
  carregar: boolean = false;
  nome: string = '';
  comentario: string = '';
  email: string = '';

  @Input() comecoP: string;
  currentUrl: string = "";

  constructor(
    private db: AngularFireDatabase,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }

  adicionarComentario(nome: string, comentario: string, email: string) {
    const dataFormatada = new Date().toLocaleString();
    const comentarioData = {
      nome,
      comentario,
      email,
      data: dataFormatada
    };
    return this.db.list('/comentarios').push(comentarioData);
  }

  async addComentario() {
    this.mensagem = "";
    this.carregar = true;
    if (this.nome && this.comentario && this.email) {
      this.adicionarComentario(this.nome, this.comentario, this.email)
      await this.delay(1000)
        .then(() => {
          this.nome = '';
          this.comentario = '';
          this.email = ''
          this.chamarToastNoPai('mensagem enviada!');
          this.carregar = false;
        })
        .catch(error => console.error('Erro ao adicionar comentário:', error));
      this.carregar = false;
    } else {

      if (this.nome === "") {
        this.mensagem = "nome"
        this.carregar = false;
        return
      }

      if (this.email === "") {
        this.mensagem = "email"
        this.carregar = false;
        return
      }

      if (this.comentario === "") {
        this.mensagem = "mensagem"
        this.carregar = false;
        return
      }

      this.carregar = false;
    }
  }

  @Input() aviso: boolean;
  @Input() texto: string;
  @Output() showToastEvent = new EventEmitter<string>();

  chamarToastNoPai(texto: string) {
    this.showToastEvent.emit(texto);
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
