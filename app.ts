// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Zhaoq",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = "ADMIN", READ_ONLY = 100, AUTHOR = "AUTHOR" };

const person = {
  name: "Zhaoq",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin"); // TypeScipt can't catch the error
// person.role[1] = 10;

// person.role = [0, "admin", "user"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.localeCompare()); // !!! ERROR !!!
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
