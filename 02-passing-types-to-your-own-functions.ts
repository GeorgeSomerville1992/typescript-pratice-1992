
const makeFetch = (url: string): Promise<{ data: string }> => {
  return fetch(url).then((res) => res.json())
}

makeFetch("/api/endpoint").then((res) => {
  console.log(res);
});

const makeFetchGeneric = <TData>(url: string): Promise<TData> => {
  return fetch(url).then((res) => res.json())
}
// classic, because the type is inferred from the function call, we can see what it is on res
makeFetchGeneric<{ firstName: string; lastName:string;  }>("/api/endpoint").then((res) => {
  console.log(res);
})