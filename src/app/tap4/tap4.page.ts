import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';
import { element } from 'protractor';

@Component({
  selector: 'app-tap4',
  templateUrl: './tap4.page.html',
  styleUrls: ['./tap4.page.scss'],
})
export class Tap4Page implements OnInit {
  newsList=[];
  constructor() {}

  ngOnInit(){
    if(localStorage.getItem('newFav')){
      this.newsList=JSON.parse(localStorage.getItem('newFav'));
    }
  }

  romoveItem(item){
    //item.url
    this.newsList=this.newsList.filter(el=>{
     return el.url !==item.url;
    });
    localStorage.setItem('newFav',JSON.stringify(this.newsList));
  }



}
