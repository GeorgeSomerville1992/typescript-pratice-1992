import React, { useState } from 'react';

const themeOptions = ["light", "dark", "system"];

type Theme = "light" | "dark" | "system";

export default function Themes() {
  const [selectedTheme, setSelectedTheme] = useState<Theme>("light");
  // inferes so no problem!
  // above we can infer the type of selectedTheme as "light" | "dark" | "system"
  // as useState("light"); is still jsut a string
  // in this case this is an example where we want ot use the type of useState

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-5 font-semibold">Themes</h1>

      <ThemeOptions themeOptions={themeOptions} selectedTheme={selectedTheme} onThemeClick={(theme) => setSelectedTheme(theme)}/>
    </section>
  )
}
// there is a relation shhip here in terms of what types 
// we can use.
// it can be an array of strings
// array of numbers

type ThemeOptionsProps<T> = {
  // relatyion ship between the two
  themeOptions: T[] 
  selectedTheme: T;
  onThemeClick: (theme: T) => void;
}
/*
  // <ThemeOptions themeOptions={themeOptions} selectedTheme={5} />
  // we cannot do the above because themeOptions is an array of strings
  relation shit also with onThemeClick. The theme type relationship
  // will be relating to the type we pass in!
*/
// if we want to specify type we have to pass it here.

function ThemeOptions<T extends React.ReactNode>({ 
  themeOptions, 
  selectedTheme,
  onThemeClick
}: ThemeOptionsProps<T>){
  // instead of casting theme below ot be reactNode, we can 'restrict the type..'
  return (
     <ul className='list-disc'>
        {themeOptions.map((theme, index) => (
          <li key={index} className="mb-3">
            <button
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                selectedTheme === theme ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => onThemeClick(theme)}
            >
              {theme}
            </button>
          </li>
        ))}
      </ul>
  )
}


// remember the function below, we can use this to Restrict on the type above, for theme
// to restrICT it to be a react node
function convertToArrayRestrict<T extends number | string>(input: T): T[] {
  return [input];
}


// above integllswnsder will infer 

convertToArrayRestrict("hello");
//convertToArrayRestrict <"hello">(input: "hello"): "hello"[]


// generics 
// these are just a way of specifying a type relationship between the inputs and the outputs of a function or component.
/*
  type ThemeOptionsProps<T> = {
  themeOptions: T[] 
  selectedTheme: T;
  onThemeClick: (theme: T) => void;
}
- relationship of properties in an object
- relationship of two parameters in a function
- relationship of a partimer and a return value of a function


*/