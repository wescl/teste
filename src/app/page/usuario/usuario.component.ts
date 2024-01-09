import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/model/service.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300) // ajuste a duração conforme necessário
      ]),
      transition('* => void', [
        animate(300, style({ opacity: 0 })) // ajuste a duração conforme necessário
      ])
    ])
  ]
})
export class UsuarioComponent {

  visualizacao: any[] = [];
  menu:boolean = false;
  currentUrl = "";

  constructor(
    private service: Service,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getIpAddress();
    this.currentUrl = this.router.url.slice(-2);
    console.log("testando current " + this.currentUrl);
  }
  

  getIpAddress(): void {
    this.service.getIpAddress().subscribe((data) => {
      this.service.adicionarIp(data.ip, data.city, data.region, data.country_name);
    });
  }

  downloadPDF(): void {
    const pdfUrl = '/assets/texto.pdf';
    this.service.downloadPDF(pdfUrl).subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'texto.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }

  irPt() {
    this.router.navigate(['/']);
  }

  irEn() {
    this.router.navigate(['/en']);
  }

  irEs() {
    this.router.navigate(['/es']);
  }

  exibirMenu(){
    this.menu = !this.menu
  }

}
