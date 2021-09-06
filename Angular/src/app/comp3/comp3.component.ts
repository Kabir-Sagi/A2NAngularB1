import { Component, OnInit } from '@angular/core';
import {FilterdataService} from '../filterdata.service'

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  in:any
  constructor(private filterdataservice:FilterdataService) { 
    this.in = this.filterdataservice.info
  }

  ngOnInit(): void {
  }

}
