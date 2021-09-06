import { Component, Input,  Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  @Input() childRef:string=""
  @Output() childEvent=  new EventEmitter()
  
  getData(value:string) {
    this.childEvent.emit(value)
  }
  constructor() { }

  


}
