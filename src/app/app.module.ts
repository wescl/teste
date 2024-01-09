import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HomeComponent } from './page/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfilComponent } from './page/perfil/perfil.component';
import { ProjetosComponent } from './page/projetos/projetos.component';
import { HabilidadesComponent } from './page/habilidades/habilidades.component';
import { EnviarMensagemComponent } from './page/enviar-mensagem/enviar-mensagem.component';
import { SobreComponent } from './page/sobre/sobre.component';
import { HttpClientModule } from '@angular/common/http';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { MatMenuModule } from '@angular/material/menu';
import { GgridComponent } from './projeto/ggrid/ggrid.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { HomeENComponent } from './en/home-en/home-en.component';
import { HomeESComponent } from './es/home-es/home-es.component';
import { CursosComponent } from './page/cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilComponent,
    ProjetosComponent,
    HabilidadesComponent,
    EnviarMensagemComponent,
    SobreComponent,
    CarrosselComponent,
    GgridComponent,
    UsuarioComponent,
    HomeENComponent,
    HomeESComponent,
    CursosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
