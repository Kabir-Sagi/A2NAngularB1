import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  // encapsulation:ViewEncapsulation.None
  

})
export class MainComponent implements OnInit {
  name="adam"
  constructor() { }

  ngOnInit(): void {
  }

}
