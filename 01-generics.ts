
type MyGenericType<TData> = {
  data: TData;
}

// works like a function?
// data => { firstName: string; }
type Example1 = MyGenericType<{
  firstName: string;
}>

// data => number
type Example2 = MyGenericType<number>

export {};

// it's a type function whch you can create a different type out of.

