//Object
let studentData: {
    name: string,
    age: number,
    address: string,
    rollNo: number
} = {
    name: "Okasha",
    age: 20,
    address: "Karachi",
    rollNo: 11111
}

// 1. console.log(studentData.name); //dot notation: write variable. if you need specific data from object

// 2. console.log(studentData["name"]) //square notation: dynamically kisi bhi object ki property ko get krna ho to hum square notation use krte hai

// 3. let user_prompt = "age"
// console.log(studentData[user_prompt]);


// // | = union, to make types flexible
// let rollno: number | string | boolean = 123456 
// rollno = "piaic-12345"
// rollno = false


// //literal type: value ko hi type bana do
// let my_name: "Okasha" = "Okasha" 
// my_name = "Anas"

// let shirtColor: "brown" | "blue" | "teal" | "red" = "red"
// shirtColor = "brown"
// shirtColor = "teal"
// shirtColor = "blue"
// shirtColor = "pink" //error

//assignments: 
//1. array ke andar multiple elements honge or har element pr aik object hoga or object mei individual bande ki details store hongi or phir usse loop mei chalana hai

// creating an object
let studentOne = {
    name : "ali",
    age : 18,
    classDay : "tuesday",
    rollno : 339652
      }

let studentTwo = {
    name : "sana",
    age : 20,
    classDay : "sunday",
    rollno : 317627
      }

let studentThree = {
    name : "iqbal",
    age : 24,
    classDay : "thursday",
    rollno : 328533
      }

//storing object in an array
let studentDetails = [studentOne, studentTwo, studentThree]

//printing array using loop
for (let i = 0; i < studentDetails.length; i++){
    console.log(studentDetails[i]);
}