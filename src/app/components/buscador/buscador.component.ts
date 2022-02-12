import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VillanosService } from 'src/app/servicios/villanos.service';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public termino: string = "";
  public comic: any[] = [];

  constructor(private _activatedRoute: ActivatedRoute, 
      private _heroesService: HeroesService,
      private _villanoService: VillanosService) {
        
  }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(params=>{
       this.termino = params['termino'];
       this.comic = this._heroesService.buscarHeroe( params['termino']);
       if(!this.comic.length){
        this.comic = this._villanoService.buscarVillano( params['termino']);
       }
    })

  }


}
