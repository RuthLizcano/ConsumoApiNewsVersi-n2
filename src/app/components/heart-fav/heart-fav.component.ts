import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart-fav',
  templateUrl: './heart-fav.component.html',
  styleUrls: ['./heart-fav.component.scss'],
})
export class HeartFavComponent implements OnInit {
  isFill=true

  constructor() { }

  ngOnInit() {
  }
  
  addFav(){
    this.isFill=! this.isFill;
  }
}
