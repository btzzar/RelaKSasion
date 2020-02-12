import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Spot } from '../../shared/spot.model';
import { ExploreService } from '../../shared/explore.service';
import { HistoryService } from '../../shared/history.service';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from "angular-notifier";
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  private readonly notifier: NotifierService;
  selectedEvent: Spot;

  @Output() messageEvent =  new EventEmitter<boolean>();
  isBooked: boolean = true;
  bookDate: Date;
  time: any;
  errExists: boolean = false;
  errMsg: string = "";

  events: Spot[];
  shuffledEvents: Spot[];




  constructor(private userSevice: UserService, private exploreService: ExploreService, private historyService: HistoryService, notifierService: NotifierService) {
    this.notifier = notifierService;
   }

  //funkcija pretvara Time strukturu u string
  toStr(time: NgbTimeStruct): string {
    if (!time) {
      return null;
    }
    return `${this.pad(time.hour)}:${this.pad(time.minute)}:${this.pad(time.second)}`;
  }
  // pomocna funkcija koja pomaze pri pravilnom formatiranju time stringa
  private pad(i: number): string {
    return i < 10 ? `0${i}` : `${i}`;
  }
  // funkcija koja pravi konacan Date format rezervacije
  compileDateTime(time: string, date: Date){
    if(date != undefined){
    return new Date(date.toDateString() + " " + time);
  }
    else return null;
  }

  // funkcija koja randomizuje objekte koji ce biti prikazani 
  shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
  }
  // funkcija koja proverava da li vec postoji zakazan termin istog sata u istom mestu
  bookAvailable(date: Date): boolean{
    let bookHr = date.toTimeString().substring(0,2);
    let bookDt = date.toDateString(); //datum bez vremena

    // console.log(bookHr);
    var ind = true;
    
    let histEvents = this.historyService.getHistory();

    histEvents.forEach(e => {
      let histHr =  e.date.toTimeString().substring(0,2); 
      let histDate = e.date.toDateString();
      // console.log(histHr);
      if(e.name == this.selectedEvent.name && e.type == this.selectedEvent.type && histHr == bookHr && histDate == bookDt){
        // console.log("WTF");
        this.errExists = true;
        this.errMsg = "You cannot book the same spot twice in the same hour!";
        this.notifier.notify("error", this.errMsg);
        ind = false;
      }
    });
    return ind;
  }

  onBook(){
    if(this.userSevice.currentUser == null){
      this.errExists = true;
      this.errMsg = "You must be logged in in order to book.";
      this.notifier.notify("error", this.errMsg);
    }else{
    let compiled = this.compileDateTime(this.toStr(this.time), this.bookDate);
    if(compiled > new Date() && compiled != null){
    if(this.bookAvailable(compiled)){
    this.selectedEvent.date = compiled;
    this.historyService.addSpot(this.selectedEvent);
    this.isBooked = !this.isBooked;
    this.messageEvent.emit(this.isBooked);
    this.errExists = false;
    this.notifier.notify("success", "You have successfully booked your event!");
    }
    // window.alert("Booked successfully");
    // console.log(this.compileDateTime(this.toStr(this.time), this.bookDate));
    }else{
      this.errExists = true;
      this.errMsg = "Please pick a correct date and time";
      this.notifier.notify("error", this.errMsg);
    }
    }
  }

  ngOnInit() {
    this.events = this.exploreService.getSpots();
    this.shuffledEvents = this.shuffle(this.events);
  }

}
