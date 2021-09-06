import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component  {
   
  constructor(private sharedata:ShareDataService) { }
  getData(name:string,password:string):void {
    console.log(name,password)
     this.sharedata.data = {
       name:name,
       password:password
     }

  }

  ngOnInit(): void {
  }

}
