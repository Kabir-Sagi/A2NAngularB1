import {Student} from './Interface'

class School implements Student {

     id=1
     name="A2N"
     isPresent=true

     getMarks():void {
         console.log(this.id,this.name,this.isPresent)   //implemented method
     }
}

  var s =new School()
  s.getMarks()