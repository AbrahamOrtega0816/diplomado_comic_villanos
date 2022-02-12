import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private _activeRoute: ActivatedRoute,
    private _heroesServices: HeroesService) { 

      this._activeRoute.params.subscribe( params => {
        this.heroe = this._heroesServices.getHeroe(params['id'])
      })
    }

  ngOnInit(): void {
  }

}
