import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-db',
  templateUrl: './twoway-db.component.html',
  styleUrls: ['./twoway-db.component.css']
})
export class TwowayDBComponent implements OnInit {
   data:string = ""
   date:Date = new Date()
   title:string = "Hello Angular"
  constructor() { }

  ngOnInit(): void {
  }

}
