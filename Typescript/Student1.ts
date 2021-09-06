export class Student {
   name:string;
   city:string;
   phn:number;
   constructor(name:string,city:string,phn:number) {
      this.name=name;
      this.city = city;
      this.phn = phn
   }

       displayData():void {
          console.log(this.name,this.city,this.phn)
       }
}