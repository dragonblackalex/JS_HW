const studentArr = [{
  name: 'Сергей',
  surname: 'Войлов',
  ratingPoint: 1000,
  schoolPoint: 1000,
  course: 2,
},
{
  name: 'Татьяна',
  surname: 'Коваленко',
  ratingPoint: 880,
  schoolPoint: 700,
  course: 1,
},
{
  name: 'Анна',
  surname: 'Кугир',
  ratingPoint: 1430,
  schoolPoint: 1200,
  course: 3,
},
{
  name: 'Станислав',
  surname: 'Щелоков',
  ratingPoint: 1130,
  schoolPoint: 1060,
  course: 2,
},
{
  name: 'Денис',
  surname: 'Хрущ',
  ratingPoint: 1000,
  schoolPoint: 990,
  course: 4,
},
{
  name: 'Татьяна',
  surname: 'Капустник',
  ratingPoint: 650,
  schoolPoint: 500,
  course: 3,
},
{
  name: 'Максим',
  surname: 'Меженский',
  ratingPoint: 990,
  schoolPoint: 1100,
  course: 1,
},
{
  name: 'Денис',
  surname: 'Марченко',
  ratingPoint: 570,
  schoolPoint: 1300,
  course: 4,
},
{
  name: 'Антон',
  surname: 'Завадский',
  ratingPoint: 1090,
  schoolPoint: 1010,
  course: 3
},
{
  name: 'Игорь',
  surname: 'Куштым',
  ratingPoint: 870,
  schoolPoint: 790,
  course: 1,
},
{
  name: 'Инна',
  surname: 'Скакунова',
  ratingPoint: 1560,
  schoolPoint: 200,
  course: 2,
},
];


class Student {
  constructor(enrolee) {
      this.is = Student.ID++;
      this.isSelfPayment = true;
      Object.assign(this, enrolee);

      Student.listOfStudents.push(this);
      Student.filterBySelfPayment();       
  }

  static ID = 1;

  static listOfStudents = [];    

  static filterBySelfPayment() {
      const studentsList = Student.listOfStudents;
      const sortStudentsList = studentsList.sort((a, b) => a.ratingPoint > b.ratingPoint ? 1 : -1);        

      for (const index in sortStudentsList) {
          const student = sortStudentsList[index];
          if (student.ratingPoint >= 800 && index > 5 ) {
              student.isSelfPayment = false;
              console.log(index)
          }    
      }


      
  }   
}



for (const enrolee of studentArr) {
  new Student(enrolee)
}

console.log(Student.listOfStudents)


class CustomString {
  reverse(str) {
    const resultArr = [];
    for (let i of str) resultArr.unshift(i);
    return resultArr.join("");
  }
  ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  ucWords(str) {
    return str
      .split(" ")
      .map((i) => this.ucFirst(i))
      .join(" ");
  }
}

let myStr = new CustomString();
console.log(myStr.reverse("ytrewq"));
console.log(myStr.ucFirst("qwerty"));
console.log(myStr.ucWords("qwerty qwerty qwerty"));
