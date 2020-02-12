import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ExploreService } from '../../shared/explore.service';
import { Spot } from '../../shared/spot.model';
import { HistoryService } from '../../shared/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  displayedColumns = ["name", "type", "rating", "date", "status"];
  eventSource = new MatTableDataSource<Spot>();
  timer: any;


  @Input() bookedEvent: boolean;
  setBooked: boolean;

  @ViewChild(MatSort, {static:false}) sort: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;


  constructor(private historyService: HistoryService) { }

  setStatus(spot: Spot){
    if(spot.date < new Date()){
      spot.status = "expired";
    }else{
      spot.status = "active";
    }
  }

  ngOnInit() {
      this.timer = setInterval(() => {
      if(this.setBooked != this.bookedEvent){
        this.ngOnInit();
      }
      }, 500);
      this.setBooked= this.bookedEvent;
      this.eventSource.data = this.historyService.getHistory();
      this.eventSource.data.forEach(s=> this.setStatus(s));
  }

  ngAfterViewInit(){
    this.eventSource.sort = this.sort;
    this.eventSource.paginator = this.paginator;
}

}
