import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertyclass',
  templateUrl: './propertyclass.component.html',
  styleUrls: ['./propertyclass.component.css']
})
export class PropertyclassComponent implements OnInit {
   classofcss:string = 'one two three four'
   isDisabled:boolean = true
   image:string ="https://images.pexels.com/photos/9166412/pexels-photo-9166412.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  constructor() { }
  ChangeCss() {

    this.classofcss = "newOne"
  }
  FirstCss() {
    this.classofcss = 'one two three four'
  }

  familyImage() {
     this.image ="https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
     this.isDisabled = true
    }
  freindsImage() {
    this.image = "https://images.pexels.com/photos/6037721/pexels-photo-6037721.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    this.isDisabled = false
  }
  ngOnInit(): void {
  }

}
