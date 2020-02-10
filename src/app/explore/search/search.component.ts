import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from '../../shared/event.model';

import { ExploreService } from '../explore.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  // @Output() searchQuery = new EventEmitter<void>();

  constructor(private exploreService: ExploreService) { }

  events: Event[];

  reducedEvents: Event[];

  selectedCategory;
  selectedCity;

  selectedSpot;

  ngOnInit() {
    this.events = this.exploreService.getEvents();
  }

  onSubmit(form: NgForm){
    this.selectedCategory = form.value.type;
    this.selectedCity = form.value.city;
    console.log(this.selectedCategory);
    console.log(this.selectedCity);

    this.reducedEvents = this.events.filter(x => x.city == this.selectedCity && x.type == this.selectedCategory);
    console.log(this.reducedEvents);
  }

  

  // searchQueryResults(){
  // 	this.searchQuery.emit();
  // }

}
