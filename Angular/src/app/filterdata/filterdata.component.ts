import { Component, OnInit } from '@angular/core';
import {FilterdataService} from '../filterdata.service'

@Component({
  selector: 'app-filterdata',
  templateUrl: './filterdata.component.html',
  styleUrls: ['./filterdata.component.css']
})
export class FilterdataComponent implements OnInit {
  data:any;
  constructor(private filterdataservice:FilterdataService) {

    this.data = this.filterdataservice.info
   }
   filterMale() {
            this.data = this.filterdataservice.info.filter((element:any)=>{
                  return element.gender.toLowerCase() === 'male'
            })    
   }

   filterFemale(){
    this.data = this.filterdataservice.info.filter((element:any)=>{
      return element.gender.toLowerCase() === 'female'
})
   }

  ngOnInit(): void {
  }

}
