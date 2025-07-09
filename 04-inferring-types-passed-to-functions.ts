// we don't always have to pass the types to a generic function, but we can if we want to

// looking into the run time types and see if we can infer anything?
const addIdToObject = <T>(obj: T) => {
  return {
    ...obj,
    id: "123"
  }
}

const result = addIdToObject<({
  firstName: "John",
  lastName: "Doe"
})>

console.log(result);



export {};
