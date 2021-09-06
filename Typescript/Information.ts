class Information {
     name:string;
     phn:number;
     status:boolean;

     constructor(name,phn,status) {
        this.name =name;
        this.phn = phn;
        this.status = status
     }

        getData():void {
            console.log(this.name,this.phn,this.status)
        }


}
     var info = new Information("A2N",99999,true)
     var info1 = new Information("Rahul",89999,false)
     info.getData()
     info1.getData()