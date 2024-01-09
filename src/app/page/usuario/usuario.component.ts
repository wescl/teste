import { Component } from '@angular/core';
import { Service } from 'src/app/model/service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {

  visualizacao: any[] = [];

  constructor(
    private service: Service,
  ) { }

  ngOnInit(): void {
    this.getIpAddress();
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
}
