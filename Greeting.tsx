/*===============
Code 01 : 

import React from 'react'; 
const Greeting = ({ name }) => { 
return <div>Hello, {name}!</div>;
 };
 export default Greeting;
 =============*/



import React from 'react';


interface GreetingProps {
  name: string;
}

// react.FC<greetingProps>  used to tell typescript that greeting is e fct


const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Export the component
export default Greeting;
