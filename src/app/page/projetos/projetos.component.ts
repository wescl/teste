import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
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
export class ProjetosComponent {

  mensagem: boolean = false;

  constructor(private router: Router) { }

  irGGrid() {
    this.router.navigate(['/ggrid'], {
      state: { animation: 'ggrid' }
    });
  }

  async botao(){
    this.mensagem = true;
    await this.delay(3000);
    this.mensagem = false;
  }
  
  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
