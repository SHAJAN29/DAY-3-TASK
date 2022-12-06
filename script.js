
const resume = {
  "name": "shajan",
  "age": "23",
  "gender": "male",
  "email": "m.j.sandy2913@gmail.com",
  "study": ["bsc(viscual_communation)"],
  "experience": ["internship in cauvery NEWS", "prasad corp ltd"],

  "langauges_known": ["Tamil", "English", "telegu"],
};
for (let i = 0; i <resume.experience.length; i++) {
    console.log(resume.experience[i]);
  }
for (let key in resume){

  console.log(resume[key]);

}

for (let value of resume.langauges_known){

  console.log(value);

}

let b =resume.langauges_known.forEach((element) => {
 console.log(`${element+"s"}`)
});




let arr = [
  {
    name: "shajan",
    age: "23",
  },
  {
    name: "priya",
    age: "20",
  },
  {
    name: "moses",
    age: "50",
  },
  {
    name:"jaya",
    age:"45"  }
]
//for (let i in arr) {
  //  console.log(arr[i].name);
 // }
//for (let i = 0; i <arr.length; i++) {
 // console.log(arr[i].name,":",arr[i].age);
//}
