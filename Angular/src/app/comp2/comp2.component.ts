import { Component, OnInit } from '@angular/core';
import {ShareDataService} from '../share-data.service'

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
   name:string = ""
   password:string = ""
  constructor(private sharedata:ShareDataService) { }

  ngOnInit(): void {
  }
  GetData():void {
       this.name = this.sharedata.data.name
       this.password = this.sharedata.data.password
  }

}
