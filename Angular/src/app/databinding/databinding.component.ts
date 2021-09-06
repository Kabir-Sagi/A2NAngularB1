import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  col:number = 4
 
  fontSize:string = '10px'
  isbold:boolean = true
  constructor() { }

  ngOnInit(): void {
  }
 
}
