


function convertToArrayNonGeneric(input: number | string): number[] {
  return [input];
}

convertToArray('hello');


// below returns an array of the same type as the input
// this function is now a generic function with 1 type parameter T
function convertToArrayGeneric<T>(input: T): T[] {
  return [input];
}

const stringArray = convertToArrayGeneric<string>('hello');
const numberArray = convertToArrayGeneric<number>(123);
const objectArray = convertToArrayGeneric<{ name: string }>({ name: 'John' });

// we can use this for any types.. 



const getIndexOfArrayItem = <T>(array: T[], arrayItem: T) => {
  // don't need to specify return type as we know it will always be a number
  return array.findIndex((item) => item === arrayItem);
};

const arr = [55,99,77];
getIndexOfArrayItem(arr, 99);

// use a different input type generic 
// is input1 may very well be a different type to input2
// there is no relation ship  etween types and what's passed in
// but there will be for the return
const createArrayPair = <T, K>(input1: T, input2: K): [T, K] => {
  // specifying a relationship between the inputs and the return value
  return [input1, input2];
}

function convertToArrayRestrict<T extends number | string>(input: T): T[] {
  return [input];
}