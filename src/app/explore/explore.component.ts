import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor() { }

  // sharedEvent: Event;
  booked: boolean;

  receiveMessage($event){
    this.booked = $event;
    console.log(this.booked);
  }

  ngOnInit() {
  }

}
