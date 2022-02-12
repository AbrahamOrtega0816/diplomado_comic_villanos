import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public termino: string = "";
  public heroes: any[] = [];

  constructor(private _activatedRoute: ActivatedRoute, 
      private _heroesService: HeroesService) {
        
  }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(params=>{
       this.termino = params['termino'];
       this.heroes = this._heroesService.buscarHeroe( params['termino']);
    })

  }


}
