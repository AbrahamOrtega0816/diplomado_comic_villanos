import { Component, OnInit } from '@angular/core';
import { Villano, VillanosService } from '../../servicios/villanos.service';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html', 
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent implements OnInit {
  villanos: Villano[] = [];
  

  constructor( private _villanosService: VillanosService) {

   }

  ngOnInit(): void {
    this.villanos = this._villanosService.getvillanos();
    console.log(this.villanos);
  }

}
