import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent {

  constructor(private router: Router) { }

  irGGrid() {
    this.router.navigate(['/ggrid'], {
      state: { animation: 'ggrid' }
    });
  }
  
}
