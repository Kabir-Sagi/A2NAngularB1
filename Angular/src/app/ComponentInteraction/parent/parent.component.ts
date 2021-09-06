import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentData:string = ""
  childData:string=""
  constructor() { }

  getDataFromChild(value:string) {
   this.childData = value
  }

  ngOnInit(): void {
  }

}
