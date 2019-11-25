import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  @Output() searchQuery = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  searchQueryResults(){
  	this.searchQuery.emit();
  }

}
