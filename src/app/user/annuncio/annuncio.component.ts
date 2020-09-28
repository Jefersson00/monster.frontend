import { Component, OnInit } from '@angular/core';
import { AnnuncioDTO } from 'src/dto/AnnuncioDTO';
import { AnnuncioService } from 'src/service/AnnuncioService';

@Component({
  selector: 'app-annuncio',
  templateUrl: './annuncio.component.html',
  styleUrls: ['./annuncio.component.css']
})
export class AnnuncioComponent implements OnInit {


  annuncios: AnnuncioDTO[];
  constructor(private service: AnnuncioService) { }



  ngOnInit(): void {
  }


  getAnnuncios(){
    this.service.getAll().subscribe(annuncios => this.annuncios = annuncios);
  }


 


}
