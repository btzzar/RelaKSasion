import { Spot } from "../shared/spot.model";

export class ExploreService {
    private Spots: Spot [] = 
        [
            {name:"Cezar", type: "Restaurant", city: "Beograd" , rating: 4, imgPath: "../../assets/img/cezar.jpg", desc: "Retro kafic za stariju klijentelu, prijatno okruzenje, cene u rangu skupljih"},
            {name:"WakeUp", type:"Restaurant", city: "Beograd", rating:5, imgPath: "../../assets/img/wakeup.jpg", desc:"Moderan kafic sa vrhunskom uslugom, cene prilagodjene gradjanima"},
            {name:"Gagarin", type:"Restaurant", city: "Novi Sad", rating:3, imgPath: "../../assets/img/gagarin.jpg", desc:"Jednostavan kafic u centru grada, prijatno okruzenje, cene pristojne"},
            {name:"Blok kafe", type:"Restaurant", city: "Nis", rating:2,  imgPath: "../../assets/img/blok.jpg", desc:"Odlican restoran u centru Nisa, cenovni rang - $$"},
            {name:"Hotel Balkan", type:"Hotel", city:"Beograd", rating: 5,imgPath:"../../assets/img/balkan.png", desc:"Hotel sa 4 zvezdice, all inclusive opcije, centar grada"},
            {name:"Holiday Inn", type:"Hotel", city:"Nis", rating: 5 ,imgPath:"../../assets/img/holiday.jpg", desc:"Hotel u centru Nisa, na 50m od glavne ulice i soping centara"},
            {name:"Hotel Srbija", type:"Hotel", city:"Novi Sad", rating: 4 ,imgPath:"../../assets/img/srbija.jpg", desc:"Odlican hotel za avanturiste u centru Novog sada, usluga na nivou vrhunskih svetskih hotela"},
            {name:"Moskva", type:"Hotel", city:"Beograd", rating: 5 ,imgPath:"../../assets/img/moskva.jpg", desc:"Najpoznatiji hotel u Beogradu, na Terazijama"},
            {name:"Caesar Spa", type:"Spa center", city:"Nis", rating: 4,imgPath:"../../assets/img/cezarSpa.jpg", desc:"Spa centar sa svim neophodnim funkcionalnostima za ugodan boravak"},
            {name:"Papillon Spa", type:"Spa center", city:"Novi Sad", rating:5 ,imgPath:"../../assets/img/papillon.jpeg", desc:"Spa centar u centru Novog sada, usluge masaze i saune"},
            {name:"Royal Spa", type:"Spa center", city:"Beograd", rating:4 ,imgPath:"../../assets/img/royal.jpg", desc:"Spa centar na periferiji Beograda, odlicna cena za vrhunsku uslugu"},
            {name:"Ada Oasis", type:"Spa center", city:"Nis", rating: 3,imgPath:"../../assets/img/adaOaza.jpeg", desc:"Moderan Spa centar sa raznim uslugama dostupnim svima"}
        ]

        getSpots(){
            return this.Spots;
        }
}