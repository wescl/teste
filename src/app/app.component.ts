import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nome: string = '';
  comentario: string = '';

  constructor(private db: AngularFireDatabase) {}

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

}
