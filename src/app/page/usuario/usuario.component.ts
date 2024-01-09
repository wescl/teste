import { ChangeDetectorRef, Component } from '@angular/core';
import { Service } from 'src/app/model/service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {

  radioOptions = [
    { label: 'PT', value: 'pt' },
    { label: 'EN', value: 'en' },
    { label: 'ES', value: 'es' }
  ];

  visualizacao: any[] = [];

  public ipUsuario: string;
  public idiomaUsuario: string | null;

  constructor(
    private service: Service,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getIpAddress();
  }

  getIpAddress(): void {
    this.service.getIpAddress().subscribe((data) => {
      this.service.adicionarIp(data.ip, data.city, data.region, data.country_name, "pt");
    });
  }

  trackSeason(index: number, season: string): string {
    return season;
  }

}
