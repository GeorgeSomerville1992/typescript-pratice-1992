// Generics is as of three seperate concepts 

// 1. Passing types to types
type PartialUser = Partial<{ id: string; name: string }>;

// 2. Passing types to functions
const stringSett = new Set<string>();

// 3. Inferring types from arguments passed to functions
const objKeys = <T extends object>(obj: T): Array<keyof T> => {
  return Object.keys(obj) as Array<keyof T>;
};

const keys = objKeys({ a: 1, b: 2 });
//    ^? const keys: ("a" | "b")[]

/*
  Lets say you need to create a few types 
  with similar structure - i.e a data shape
*/

type ErrorShape = {
  message: string;
  code: number;
};

type GetUserData = {
  data: {
    id: string;
    name: string;
  };
  error?: ErrorShape;
};

type GetPostsData = {
  data: {
    id: string;
    title: string;
  };
  error?: ErrorShape;
};

type GetCommentsData = {
  data: {
    id: string;
    content: string;
  };
  error?: ErrorShape;
};

// how can we clean the above up?

/*
  if OOP-inclined, we could create a base class - resusable interface
  // like so
*/

interface DataBaseInterface {
  error?: ErrorShape;
}

interface GetUserDataI extends DataBaseInterface {
  data: {
    id: string;
    name: string;
  };
}

interface GetPostsDataI extends DataBaseInterface {
  data: {
    id: string;
    title: string;
  };
}

interface GetCommentsDataI extends DataBaseInterface {
  data: {
    id: string;
    content: string;
  };
}

// However, it is more concise to create a 'type function' which takes
// which takes in the type of data and returns the new data shape

// Our new type function!

// This is our generic type

type DataShape<TData> = {
  data: TData;
  error?: ErrorShape;
};

// we then pass our gneeric type another type
// so whatever we pass in as TData, we will get a type onto data
type GetUserDataTF = DataShape<{
  id: string;
  name: string;
}>;

type GetPostsDataTF = DataShape<{
  id: string;
  title: string;
}>;

type GetCommentsDataTF = DataShape<{
  id: string;
  content: string;
}>;

// this is similar to interfaces etc.. 

// Lets try it with person

type PersonFeatures = {
  noOfArms: number;
  noOfLegs: number;
  canTalk: boolean;
}

type Person<PData> = {
  data: PData;
  error?: ErrorShape;
  features: PersonFeatures;
}

type GetPersonData = Person<{
  id: string;
  name: string;
}>;

type getPersonAccess = Person<{  
  isAdmin: boolean;
  isActive: boolean;
  isVerified: boolean;
}>;

// whatever passed in as arges
const George: Person<{ id: string; name: string }> = {
  data: {
    id: "123",
    name: "George",
  },
  error: undefined,
  features: {
    noOfArms: 2,
    noOfLegs: 2,
    canTalk: true,
  },
}

const Carmen: GetPersonData = {
  data: {
    id: "456",
    name: "Carmen",
  },
  features: {
    noOfArms: 0,
    noOfLegs: 0,
    canTalk: false
  }
}

const CarmenAccess: getPersonAccess = {
  data: {
    isAdmin: false,
    isActive: true,
    isVerified: true,
  },
  features: {
    noOfArms: 0,
    noOfLegs: 0,
    canTalk: false
  }
}

// so above generic types can accept multiple type arguments
// we can provide defaults to type arguments 

// We can pass Types to functions...

// functions can accept types as arguments as well..
const createSet = <T>() => {
  return new Set<T>();
};

const stringSet = createSet<string>();
// ^? const stringSet: Set<string>

const numberSet = createSet<number>();
// ^? const numberSet: Set<number>

const stringSet = createSet<string>();

stringSet.add("hello");
stringSet.add(123);
// Argument of type 'number' is not assignable to parameter of type 'string'.