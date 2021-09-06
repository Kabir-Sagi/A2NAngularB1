import { Student } from "./Student1";

class School {
  student: Student[] = [
    new Student("Adam", "Banglore", 9999),
    new Student("Chris", "Delhi", 8888),
  ];

  display(): void {
    for (var i = 0; i < this.student.length; i++) {
      //     console.log(this.student[i].name)
      //   console.log(this.student[i].city)
      //   console.log(this.student[i].phn)
      this.student[i].displayData();
      console.log("-----------------------------------------");
    }
  }
}
var school = new School();
school.display();
