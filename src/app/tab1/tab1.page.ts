import { Component, OnInit } from '@angular/core';
import { ClienteApiService } from '../services/cliente-api.service';
import { LoadingController } from '@ionic/angular';
import { element } from 'protractor';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  newsList=[];
  favItem=[];

  constructor(private miService: ClienteApiService, private loding:LoadingController) {}

  ngOnInit(){
    if(localStorage.getItem('newFav')){


    }else{
      localStorage.setItem('newFav', JSON.stringify(this.favItem));
    }
   this.callNews();
  }
  async callNews(){
    const load=await this.loding.create({
      message:"Cargando....",
    });
    await load.present();
    this.miService.getCategoria('science').subscribe(response=>{
      response.articles.forEach(element=>{
        element.isFav=false;

      });
      //console.log(response.articles);
      this.newsList=response.articles;
      //console.log(this.newsList);
      load.dismiss();
    });
  }

  addFav(item: any){
    this.favItem=JSON.parse(localStorage.getItem('newFav'));
    item.isFav=true;
    this.favItem.push(item);
    localStorage.setItem('newFav', JSON.stringify(this.favItem));
    console.log(this.favItem);

  }


}
