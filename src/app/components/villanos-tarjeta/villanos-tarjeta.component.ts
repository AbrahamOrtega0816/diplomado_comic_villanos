import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villanos-tarjeta',
  templateUrl: './villanos-tarjeta.component.html',
  styleUrls: ['./villanos-tarjeta.component.css']
})
export class VillanosTarjetaComponent implements OnInit {

  @Input() villano: any = {};
  @Input() index: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  vervillano(){
    this.router.navigate(['/villano', this.index ])
  }

}
