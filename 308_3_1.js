// Fizz Buzz

function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz()

// Apart from 2 and 5, all prime numbers have to end in 1, 3, 7 or 9
function checkPrime(num) {
  let i = 2;

  while (i < num) {
    if (num % i === 0) {
      return false;
    }
    i++;
  }
  return [true, i];
}

function nextPrimeNumber(startingNum) {
  let starting = startingNum + 1;

  while (starting) {
    if (checkPrime(starting)) {
      break;
    }

    starting++;
  }
  return starting;
}

console.log(nextPrimeNumber(20));

// CSV

function feelingLoopy(csv) {
  cell1 = [];
  cell2 = [];
  cell3 = [];
  cell4 = [];
  console.log(csv)
  let data = csv.split("\n")
console.log(data)
  for (let i = 0; i < data.length; i++) {
    // console.log(data)
    let sections = data[i].split(",")
    // console.log(sections)
    // let evenSmaller = sections[i].split(",")
    // console.log(sections[0], sections[1], sections[2], sections[3])
  // [cell1,cell2,cell3] = sections[i]

    cell1 = sections[0]
    cell2 = sections[1]
    cell3 = sections[2]
    cell4 = sections[3]


    console.log(cell1,cell2,cell3,cell4)

  }
}

// Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232


feelingLoopy("Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232")