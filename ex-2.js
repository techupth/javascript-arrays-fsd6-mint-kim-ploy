const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];
// Start coding here
let alex;
let alexHobbies;
let alexAndJamesAge;

alex = employees[1].name;
console.log(alex);

alexHobbies = employees[1].hobbies;
console.log(alexHobbies);

alexAndJamesAge = employees[0].age + employees[1].age;
console.log(alexAndJamesAge);
