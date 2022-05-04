// JS Tasks

//  #1 
let user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: '25',
    studentstatus: 'active'
};
  console.log(user.studentstatus);


//  #2 ()
let MyList = [13, 22, 'Ana', 'Development', 500,  'womenPWR'];
// 2.1
    // for (let item of MyList){
    //     console.log(item);
    // }

// 2.2
    // for (let x = 0; x < MyList.length; x++) {
    //         console.log(MyList[x]);


// 2.3
     let z = 0
     while (z < MyList.length){
         console.log(MyList[z]);
         z++;
     }  



// #3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let a of numbers) {
        if (a > 5) {
            console.log(a);
        }
    }

//  #4
    
let user1 = {
	name: 'giorgi',
	age:  20,
	studentstatus: 'active'
}

if (user1.age < 18 && user1.studentstatus == 'active') {
        console.log('hello');
    } else if (user1.name == 'giorgi') {
            console.log('hello giorgi' )
    } else if (user1.studentstatus == 'active' || user1.age < 25) {
            console.log('hello world');
    } else {
            console.log('error');
        }     
    
//  N 5 
let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;


for (let x of array) {
    if (typeof x === 'string') {
        console.log(x);
    }
}

//  6
let array1 = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

for (let a of array1) {
    for (let item of a) {
        if (item > 0) {
            console.log(item);
        }
    }
}

// 7 

let array2 = [32, 10, 'hello', null, 'hello2', 50 ];

for(let a of array2){
    if (a% 5  == 0 && typeof a == 'number'){
        console.log(a)
    }
}


// FUNCTIONS

// 1 

function sum (...args){
    numberSum = 0;
    for(let i of args){
        if(i>0){
            numberSum=numberSum+i
            
        }
    }
    return numbersum;
}
let result = sum (2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(numberSum);


// 2 
function sum (...args){
    numberSum = 0;
    for(let i of args){
        numberSum=numberSum+i
            
        
    }
  console.log(numberSum)
}
sum (10, 50, 6, 7, 8, 11, 6, 3, 9);

// 3

let userA = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

  function A () {
    if (userA.isloggedin == true ) {
        console.log(userA.firstname + ' ' + userA.lastname);
    } else {console.log(false)}
  }
  A ();


//   4

let maxnumber = [22, 13, 1980, 1992, 2222, 15, -6, 55, 17];

(ეს ზუსტად ვერ გავაკეთე და გადავხედავ კიდე ლექციას)