import { Injectable } from '@angular/core';
import { Spot } from '../shared/spot.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  private history: Spot [] = [
    {name:"Cezar", type: "Restaurant", city: "Beograd" , rating: 4, imgPath: "../../assets/img/cezar.jpg", desc: "Retro kafic za stariju klijentelu, prijatno okruzenje, cene u rangu skupljih", date: new Date(), status: "active"}
  ];

  getHistory(){
    return this.history;
  }

  addSpot(e: Spot){
    this.history.push(e);
    console.log(this.history);
  }
}
