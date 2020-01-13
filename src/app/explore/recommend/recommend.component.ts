import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Event } from '../../shared/event.model';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  selectedEvent: Event;

  events: Event[] = [
  	new Event("Cezar", "Restaurant", 4, "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "Jednostavan kafic prijatno okruzenje, cene pristojne"),
  	new Event("WakeUp", "Restaurant", 5, "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "Jednostavan kafic prijatno okruzenje, cene pristojne"),
  	new Event("Gagarin", "Restaurant", 3, "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "Jednostavan kafic prijatno okruzenje, cene pristojne"),
  	new Event("Blok kafe", "Restaurant", 2, "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", "Jednostavan kafic prijatno okruzenje, cene pristojne")
  ];


  constructor() { }

  ngOnInit() {
  }

}
