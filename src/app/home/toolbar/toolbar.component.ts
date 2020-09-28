import { Component, OnInit } from '@angular/core';
import { UtenteDTO } from 'src/dto/UtenteDTO';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {


  utente: UtenteDTO;

  constructor() { }

  ngOnInit(): void {
    this.utente = JSON.parse(localStorage.getItem('currentUser'));
  }

}
