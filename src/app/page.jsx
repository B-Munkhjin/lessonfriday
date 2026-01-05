// import Image from "next/image";
"use client";
export default function Home() {
  // const value = "hello world";
  // // return (
  // //   <div className=" flex justify-center min-h-screen items-center place-content-center gap-25 ">
  // //     <Profile
  // //       name="Riki Nishimura"
  // //       caption="K-POP IDOL who is under HYBE Entertainment and main dancer of boyband
  // //         named ENHYPEN."
  // //       img="https://i.namu.wiki/i/X9ccHYLp5F29iqnxomy-u8cM4osUzr6yERsfUKRUJrORgoIJAbF89p-WCRIjIP2nTra_xww_hz2uQtXyFc_byA.webp"
  // //     />
  // //     <Profile
  // //       name="Jungwon"
  // //       caption="K-POP IDOL who is under HYBE Entertainment and leader of boyband
  // //         named ENHYPEN."
  // //       img="https://i.pinimg.com/736x/96/d3/d8/96d3d803a03ebc41588f7ac7417fbe37.jpg"
  // //     />
  // //     <Profile
  // //       name="Sunoo"
  // //       caption="K-POP IDOL who is under HYBE Entertainment and lead vocal of boyband
  // //         named ENHYPEN."
  // //       img="https://images.genius.com/e99b832cdf88b6c6be6b56ac6219cc23.1000x1000x1.jpg"
  // //     />
  // //   </div>
  // );

  // return <Component1 props1={value} />;

  // return <ColorList />;
  const number = 1;
  return (
    <div className="text-gray-50">
      <Double number={number} />
      <DrinkList />
      <User brand="Tesla" model="Model3" year="2023" />
      <Friuts />
      <Stock inStock={9} />
      <Greeting name="Munkhjin" ord="Jinluur" wish="delhiigeer aylah" />
      <Greeting name="Tenger-Erdene" ord="Uher" wish="bayjih" />
    </div>
  ); //number aa tanina aa
}
// ## 1. Arrow Functions

// Arrow functions provide a concise syntax and do not have their own `this` context, making them perfect for functional components and event handlers.

// ### Usage Example

// ```javascript
// const Welcome = ({ name }) => {
//   const handleClick = () => console.log("Clicked!");

//   return <button onClick={handleClick}>Hello {name}</button>;
// };
// ```
// ````
// **Task:** Create an arrow function component called `Double` that accepts a `number` prop and returns the result of the number multiplied by 2 inside a `<span>`.
const Double = ({ number }) => <span>{number * 2}</span>;

// ## 2. Array `.map()`

// React uses `.map()` to transform an array of data into an array of JSX elements. Every item in the list should have a unique `key` prop.

// ### Usage Example

// ```javascript
// const colors = ["Red", "Green", "Blue"];

// const ColorList = () => (
//   <ul>
//     {colors.map((color, index) => (
//       <li key={index}>{color}</li>
//     ))}
//   </ul>
// );
// ```

// **Task:** Given an array `const drinks = ['Coffee', 'Tea', 'Water']`, use `.map()` to render them as a numbered list (`<ol>`).

// ---
const DrinkList = () => {
  const drinks = ["Coffee", "Tea", "Water"];
  return (
    <ul>
      {drinks.map((drink, index) => (
        <li key={index}>{drink}</li>
      ))}
    </ul>
  );
};

// ## 3. Destructuring

// Destructuring allows you to "unpack" properties from objects or elements from arrays into distinct variables instantly.

// ### Usage Example

// ```javascript
// // Object Destructuring (commonly used for props)
// const User = ({ name, location }) => (
//   <div>
//     {name} lives in {location}
//   </div>
// );

// // Array Destructuring (commonly used for Hooks)
// const [count, setCount] = useState(0);
// ```

// **Task:** You have an object `const car = { brand: 'Tesla', model: 'Model 3', year: 2023 }`. Create a component that destructures these values in the function argument and displays them in a `<div>`.

// ---

const User = ({ brand, model, year }) => (
  <div>
    This is {model} {brand} which produced in {year}.
  </div>
);

// ## 4. Spread Operator (`...`)

// The spread operator is used to copy the contents of an array or object. In React, it is essential for updating state objects without mutating the original state.

// ### Usage Example

// ```javascript
// const user = { name: "Alex", age: 25 };

// const updateAge = () => {
//   // We spread the existing user object and only override the 'age' property
//     { ...user, age: 26 };
// };
// ```

// **Task:** You have a list `const fruit = ['apple', 'banana']`. Create a new array `allFruits` that uses the spread operator to add `'cherry'` to the end of the existing `fruit` list.

// ---

const Friuts = () => {
  const friut = ["apple ", "banana "];
  const allFriuts = [...friut, " cherry"];
  return allFriuts;
};

// ## 5. Modules (Import/Export)

// Modules allow you to split your code into multiple files. You `export` code from one file and `import` it into another to keep your project organized.

// ### Usage Example

// ```javascript
// // Button.js
// export const Button = () => <button>Click Me</button>;

// // App.js
// import { Button } from "./Button";
// ```

// **Task:** Create a file `utils.js` that exports a constant `API_URL`. Import it into a component in `App.js` and display the URL in a `<p>` tag.

// ---

// import { Button } from "./components/button";
// const Page = () => {
//   return (
//     <div className="text-gray-50">
//       <Button />
//     </div>
//   );
// };
// export default Page;

// import { API_URL } from "./components/utils";
// const Page = () => {
//   return (
//     <div className="text-gray-50">
//       <API_URL />
//     </div>
//   );
// };
// export default Page;

// ## 6. Ternary Operator /// bogino bichiglel

// The ternary operator is the cleanest way to write "if-else" logic inside JSX for conditional rendering.
// **Syntax:** `condition ? expressionIfTrue : expressionIfFalse`

// ### Usage Example

// ```javascript
// const Status = ({ isLoggedIn }) => (
//   <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}</div>
// );
// ```

// **Task:** Create a component that receives a `stock` prop (a number). If `stock > 0`, display "In Stock" in green; otherwise, display "Out of Stock" in red using inline styles.

// ---

const Stock = ({ inStock }) => {
  return (
    <div style={{ color: inStock > 0 ? "green" : "red" }}>
      {inStock > 0 ? <p>In Stock {inStock}</p> : <p>Out of Stock</p>}
    </div>
  );
};

// ## 7. Template Strings

// Template strings (using backticks ```) allow you to embed variables and expressions directly into strings using `${}`.

// import React from 'react';

// const Greeting = ({ name, points }) => {
//   // Using template strings to create a dynamic message
//   const statusMessage = `Hello, ${name}! You have ${points} points.`;

//   return (
//     <div className="profile">
//       <h1>{statusMessage}</h1>
//       <p>{`Next level: ${points + 10} points needed.`}</p>
//     </div>
//   );
// };

const Greeting = ({ name, wish, ord }) => {
  const Message = `Snu, Ene bol ${name}. Ter ${ord}-iin ord uchraas tuunii husel bol ${wish} ym.`;
  return <div>{Message}</div>;
};

// export default Greeting;

// const ColorList = () => {
//   const colors = ["red", "blue", "black", "red"];
//   return (
//     <ul className="text-gray-50">
//       {colors.map((color, index) => (
//         <li key={index}>{color}</li>
//       ))}
//     </ul>
//   );
// };

// const myFunc = () => <p>li</p>

// const Component1 = (props) => {
//   return <Component2 props2={props.props1} />;
// };
// const Component2 = (props) => {
//   return <Component3 props3={props.props2} />;
// };
// const Component3 = (props) => {
//   return <Component4 props4={props.props3} />;
// };
// const Component4 = (props) => {
//   return <Component5 props5={props.props4} />;
// };
// const Component5 = (props) => {
//   return <Component6 props6={props.props5} />;
// };
// const Component6 = (props) => {
//   return <Component7 props7={props.props6} />;
// };
// const Component7 = (props) => {
//   return <Component8 props8={props.props7} />;
// };
// const Component8 = (props) => {
//   return <Component9 props9={props.props8} />;
// };
// const Component9 = (props) => {
//   return <Component10 props10={props.props9} />;
// };
// const Component10 = (props) => {
//   return <Component11 props11={props.props10} />;
// };
// const Component11 = (props) => {
//   return <Component12 props12={props.props11} />;
// };
// const Component12 = (props) => {
//   return <Component13 props13={props.props12} />;
// };
// const Component13 = (props) => {
//   return <Component14 props14={props.props13} />;
// };
// const Component14 = (props) => {
//   return <Component15 props15={props.props14} />;
// };
// const Component15 = (props) => {
//   return <Component16 props16={props.props15} />;
// };
// const Component16 = (props) => {
//   return <Component17 props17={props.props16} />;
// };
// const Component17 = (props) => {
//   return <Component18 props18={props.props17} />;
// };
// const Component18 = (props) => {
//   return <Component19 props19={props.props18} />;
// };
// const Component19 = (props) => {
//   return <Component20 props20={props.props19} />;
// };
// const Component20 = (props) => {
//   return <Component21 props21={props.props20} />;
// };
// const Component21 = (props) => {
//   return <Component22 props22={props.props21} />;
// };
// const Component22 = (props) => {
//   return <Component23 props23={props.props22} />;
// };
// const Component23 = (props) => {
//   return <Component24 props24={props.props23} />;
// };
// const Component24 = (props) => {
//   return <Component25 props25={props.props24} />;
// };
// const Component25 = (props) => {
//   return <Component26 props26={props.props25} />;
// };
// const Component26 = (props) => {
//   return <Component27 props27={props.props26} />;
// };
// const Component27 = (props) => {
//   return <Component28 props28={props.props27} />;
// };
// const Component28 = (props) => {
//   return <Component29 props29={props.props28} />;
// };
// const Component29 = (props) => {
//   return <Component30 props30={props.props29} />;
// };
// const Component30 = (props) => {
//   return <Component31 props31={props.props30} />;
// };
// const Component31 = (props) => {
//   return <Component32 props32={props.props31} />;
// };
// const Component32 = (props) => {
//   return <Component33 props33={props.props32} />;
// };
// const Component33 = (props) => {
//   return <Component34 props34={props.props33} />;
// };
// const Component34 = (props) => {
//   return <Component35 props35={props.props34} />;
// };
// const Component35 = (props) => {
//   return <Component36 props36={props.props35} />;
// };
// const Component36 = (props) => {
//   return <Component37 props37={props.props36} />;
// };
// const Component37 = (props) => {
//   return <Component38 props38={props.props37} />;
// };
// const Component38 = (props) => {
//   return <Component39 props39={props.props38} />;
// };
// const Component39 = (props) => {
//   return <Component40 props40={props.props39} />;
// };
// const Component40 = (props) => {
//   return <Component41 props41={props.props40} />;
// };
// const Component41 = (props) => {
//   return <Component42 props42={props.props41} />;
// };

// const Component42 = (props) => {
//   return <Component43 props43={props.props42} />;
// };
// const Component43 = (props) => {
//   return <Component44 props44={props.props43} />;
// };

// const Component44 = (props) => {
//   return <Component45 props45={props.props44} />;
// };
// const Component45 = (props) => {
//   return <Component46 props46={props.props45} />;
// };
// const Component46 = (props) => {
//   return <Component47 props47={props.props46} />;
// };
// const Component47 = (props) => {
//   return <Component48 props48={props.props47} />;
// };
// const Component48 = (props) => {
//   return <Component49 props49={props.props48} />;
// };
// const Component49 = (props) => {
//   return <Component50 props50={props.props49} />;
// };
// const Component50 = (props) => {
//   return <Component51 props51={props.props50} />;
// };
// const Component51 = (props) => {
//   return <Component52 props52={props.props51} />;
// };
// const Component52 = (props) => {
//   return <Component53 props53={props.props52} />;
// };
// const Component53 = (props) => {
//   return <Component54 props54={props.props53} />;
// };
// const Component54 = (props) => {
//   return <Component55 props55={props.props54} />;
// };
// const Component55 = (props) => {
//   return <Component56 props56={props.props55} />;
// };
// const Component56 = (props) => {
//   return <Component57 props57={props.props56} />;
// };
// const Component57 = (props) => {
//   return <Component58 props58={props.props57} />;
// };
// const Component58 = (props) => {
//   return <Component59 props59={props.props58} />;
// };
// const Component59 = (props) => {
//   return <Component60 props60={props.props59} />;
// };
// const Component60 = (props) => {
//   return <Component61 props61={props.props60} />;
// };
// const Component61 = (props) => {
//   return <Component62 props62={props.props61} />;
// };
// const Component62 = (props) => {
//   return <Component63 props63={props.props62} />;
// };
// const Component63 = (props) => {
//   return <Component64 props64={props.props63} />;
// };
// const Component64 = (props) => {
//   return <Component65 props65={props.props64} />;
// };
// const Component65 = (props) => {
//   return <Component66 props66={props.props65} />;
// };
// const Component66 = (props) => {
//   return <Component67 props67={props.props66} />;
// };
// const Component67 = (props) => {
//   return <Component68 props68={props.props67} />;
// };
// const Component68 = (props) => {
//   return <Component69 props69={props.props68} />;
// };
// const Component69 = (props) => {
//   return <Component70 props70={props.props69} />;
// };
// const Component70 = (props) => {
//   return <Component71 props71={props.props70} />;
// };
// const Component71 = (props) => {
//   return <Component72 props72={props.props71} />;
// };
// const Component72 = (props) => {
//   return <Component73 props73={props.props72} />;
// };
// const Component73 = (props) => {
//   return <Component74 props74={props.props73} />;
// };
// const Component74 = (props) => {
//   return <Component75 props75={props.props74} />;
// };
// const Component75 = (props) => {
//   return <Component76 props76={props.props75} />;
// };
// const Component76 = (props) => {
//   return <Component77 props77={props.props76} />;
// };
// const Component77 = (props) => {
//   return <Component78 props78={props.props77} />;
// };
// const Component78 = (props) => {
//   return <Component79 props79={props.props78} />;
// };
// const Component79 = (props) => {
//   return <Component80 props80={props.props79} />;
// };
// const Component80 = (props) => {
//   return <Component81 props81={props.props80} />;
// };
// const Component81 = (props) => {
//   return <Component82 props82={props.props81} />;
// };
// const Component82 = (props) => {
//   return <Component83 props83={props.props82} />;
// };
// const Component83 = (props) => {
//   return <Component84 props84={props.props83} />;
// };
// const Component84 = (props) => {
//   return <Component85 props85={props.props84} />;
// };
// const Component85 = (props) => {
//   return <Component86 props86={props.props85} />;
// };
// const Component86 = (props) => {
//   return <Component87 props87={props.props86} />;
// };
// const Component87 = (props) => {
//   return <Component88 props88={props.props87} />;
// };
// const Component88 = (props) => {
//   return <Component89 props89={props.props88} />;
// };
// const Component89 = (props) => {
//   return <Component90 props90={props.props89} />;
// };
// const Component90 = (props) => {
//   return <Component91 props91={props.props90} />;
// };
// const Component91 = (props) => {
//   return <Component92 props92={props.props91} />;
// };

// const Component92 = (props) => {
//   return <Component93 props93={props.props92} />;
// };
// const Component93 = (props) => {
//   return <Component94 props94={props.props93} />;
// };
// const Component94 = (props) => {
//   return <Component95 props95={props.props94} />;
// };
// const Component95 = (props) => {
//   return <Component96 props96={props.props95} />;
// };
// const Component96 = (props) => {
//   return <Component97 props97={props.props96} />;
// };
// const Component97 = (props) => {
//   return <Component98 props98={props.props97} />;
// };
// const Component98 = (props) => {
//   return <Component99 props99={props.props98} />;
// };
// const Component99 = (props) => {
//   return <Component100 props100={props.props99} />;
// };
// const Component100 = (props) => {
//   console.log(props);

//   return <div className=" text-gray-50">{props.props100}</div>;
// };

// // const Profile = (props) => {
// //   return (
// //     <div className="p-2 w-70 shadow-lg bg-gray-200 rounded-3xl">
// //       <div className="h-70 w-66">
// //         <img className=" h-full w-full rounded-3xl " src={props.img}></img>
// //       </div>
// //       <div className="p-2 flex flex-col gap-2">
// //         <div className="flex gap-2 ">
// //           <h1 className="text-lg text-gray-950 ">{props.name}</h1>
// //           <img src="/verify.png" alt="icon" className="w-[24px]"></img>
// //         </div>
// //         <p1 className="text-sm text-gray-700">{props.caption}</p1>
// //       </div>
// //       <div className="flex p-1 relative gap-6 justify-center items-center h-14 relative bottom-3">
// //         <div className="flex gap-2">
// //           <div className="flex">
// //             <img className="w-6 h-6" src="/person.png" alt="icon"></img>
// //             <p2>109</p2>
// //           </div>
// //           <div className="flex">
// //             <img className="w-6 h-6" src="/paper.png" alt="icon"></img>
// //             <p2>113</p2>
// //           </div>
// //         </div>
// //         <div className="flex justify-center items-center gap-2 rounded-2xl bg-[#efefef] w-[109px] h-[44px] ">
// //           <p3>Follow</p3>
// //           <img className="w-4 h-4" src="/plus.png"></img>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
