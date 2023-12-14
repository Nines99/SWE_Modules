const bobSmith = {
    'nameArray': ["Bob", "Smith"], // object properties can be arrays
    nameObject: { // or other nested objects
        first: 'Bob',
        last: 'Smith'
    },
    'first-name': 'Bob', // if the object property (key) contains a space or dash, put it in quotes
    lastName: 'Smith', // or strings
    age: 32, // or numbers

    bio() { // or functions
      console.log(`${this['first-name']} ${this.lastName} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this['first-name']}.`); // functions need to use 'this' to access object properties
    }
};

const me = {
  firstName: 'Henry',
  lastName: 'Zhou',
  address: {
    road: 'Kitchener rd',
    suburb: 'Takapuna',
    city: 'Auckland',
    postcode: '0622',
  },
  likes: ['the color black and video games'],
  bio() {
    console.log(`${this.firstName} ${this.lastName} lives in ${this.address.city} and likes ${this.likes} `)
  }
}
console.log(me)
me.bio();

if(me.age) console.log("Henry's age is" + me.age);
else {console.log("No Age Defined");}

me.age = 24;
me.age++ 

console.log(me.age)

const bobSmithRef = bobSmith
const bobSmithCopy = {...bobSmith}

bobSmith.age = 30;

bobSmith.nameObject.first = 'Robert'
bobSmith.lastname = 'Jones'

console.log(bobSmithCopy)
console.log(bobSmithRef)

const vehicle = {make: 'Toyota', model: 'Prius'}
const userVehicle = {...me, ...vehicle, }