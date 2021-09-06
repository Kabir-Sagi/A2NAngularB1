import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evendatabinding',
  templateUrl: './evendatabinding.component.html',
  styleUrls: ['./evendatabinding.component.css']
})
export class EvendatabindingComponent implements OnInit {
   status:boolean = false
   title:string = "WORLD"
   date:Date = new Date()
   data:string = ""
  constructor() { }

  showRecords() {
    this.status = !this.status
  }

  ngOnInit(): void {
  }

}
