class Student {
  name1:string ;
  mobile:number ;

     constructor(x:string,y:number){
         this.name1 = x ;
         this.mobile = y

     }

    

     getData():void {
        console.log(this.name1)
        console.log(this.mobile)
     }

}
   var stu=new Student("A2N",9999)
   var stu1 = new Student("Sagar",8888)
    stu.getData()
    stu1.getData()
    console.log("-------------------------------------")
    stu.name1 = "Academy"
    stu.getData()
    stu1.getData()
    // stu.name1 = "Academy"
    // console.log(stu.mobile)
    // stu.getData()