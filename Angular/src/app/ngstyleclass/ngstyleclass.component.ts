import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyleclass',
  templateUrl: './ngstyleclass.component.html',
  styleUrls: ['./ngstyleclass.component.css']
})
export class NgstyleclassComponent implements OnInit {
  className:string = ''
  constructor() { }

  fnGetClass(country:any){
    
     
      switch(country) {
          case 'India':
            this.className="one"
            return this.className

            case 'UK':
            this.className="two"
            return this.className

            case 'USA':
            this.className="three"
            return this.className

            case 'AUS':
              this.className="four"
              return this.className
      }
   return this.className
  }

  ngOnInit(): void {
  }
   Info:any = [
     {
       name:"S1",
       country:"India"
     },
     {
      name:"S2",
      country:"UK"
     },
     {
     name:"S3",
     country:"USA"
     },
     {
      name:"S4",
      country:"AUS"
      }
   ]
   getColor(countryName:any) {
     
        switch(countryName) {
            case "India":
              return 'red'
            case 'UK':
              return 'orange'
              case 'USA' :
                return 'black'
                case 'AUS' :
                  return 'darkgray'

        }

     return
   }
  //  getC(c:any){
  //    alert(c)
  //    switch(c){
  //     case 'India':
  //      return 'one'
       
  //    }
  //     return
  //  }

}
