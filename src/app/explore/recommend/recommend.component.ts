import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Event } from '../../shared/event.model';
import { ExploreService } from '../explore.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

  selectedEvent: Event;

  events: Event[];


  constructor(private exploreService: ExploreService) { }

  ngOnInit() {
    this.events = this.exploreService.getEvents();
  }

}
