import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
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

  @Input() title: string;
  @Input() concluido: string;
  @Input() andamento: string;
  @Input() aviso: string;

  mensagem: boolean = false;
  currentUrl: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }

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
