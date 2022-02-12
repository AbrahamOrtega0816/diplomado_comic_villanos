import { Component, OnInit } from '@angular/core';
import { VillanosService } from '../../servicios/villanos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {

  villano: any = {};

  constructor(private _activeRoute: ActivatedRoute,
    private _villanosService: VillanosService) { 

      this._activeRoute.params.subscribe( params => {
        this.villano = this._villanosService.getVillano(params['id'])
      })
    }

  ngOnInit(): void {
  }

}
