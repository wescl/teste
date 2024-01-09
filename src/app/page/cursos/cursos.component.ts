import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  currentUrl = "";

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.currentUrl = this.router.url;
  }

}
