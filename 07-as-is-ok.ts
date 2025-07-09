// We can override the types in side the generic function 
// with an assertion this is ok apparently. 

const typedObjectKeys = <TObjs extends {}>(
  obj: TObj
): Array<keyof TObj> => {
  return Object.keys(obj);
}

// how do we get around the above, typescript thinss it should we one way
// and we think it should be another

// use As? someones in generic functions we know better

const typedObjectKeysOverride = <TObj extends {}>(
  obj: TObj
): Array<keyof TObj> => {
  return Object.keys(obj) as Array<keyof TObj>;
}

const result = typedObjectKeysOverride({
  name: "John",
  age: 30,
});

// we can override the return type of generic functions

