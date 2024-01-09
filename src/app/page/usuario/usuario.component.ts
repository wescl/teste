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

}
