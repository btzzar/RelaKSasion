import { Event } from "../shared/event.model";

export class ExploreService {
    private events: Event [] = 
        [
            {name:"Cezar", type: "Restaurant", city: "Beograd" , rating: 4, imgPath: "../../assets/img/cezar.jpg", desc: "Jednostavan kafic prijatno okruzenje, cene pristojne"},
            {name:"WakeUp", type:"Restaurant", city: "Beograd", rating:5, imgPath: "../../assets/img/wakeup.jpg", desc:"Jednostavan kafic prijatno okruzenje, cene pristojne"},
            {name:"Gagarin", type:"Restaurant", city: "Novi Sad", rating:3, imgPath: "../../assets/img/gagarin.jpg", desc:"Jednostavan kafic prijatno okruzenje, cene pristojne"},
            {name:"Blok kafe", type:"Restaurant", city: "Nis", rating:2,  imgPath: "../../assets/img/blok.jpg", desc:"Jednostavan kafic prijatno okruzenje, cene pristojne"},
            //{name:"Balkan", type:"", city:"", rating: ,imgPath:"", desc:""},
            // {name:"", type:"", city:"", rating: ,imgPath:"", desc:""},
            // {name:"", type:"", city:"", rating: ,imgPath:"", desc:""},
            // {name:"", type:"", city:"", rating: ,imgPath:"", desc:""},
            // {name:"", type:"", city:"", rating: ,imgPath:"", desc:""},
            // {name:"", type:"", city:"", rating: ,imgPath:"", desc:""},
            // {name:"", type:"", city:"", rating: ,imgPath:"", desc:""},
            // {name:"", type:"", city:"", rating: ,imgPath:"", desc:""},
        ]

        getEvents(){
            return this.events;
        }
}