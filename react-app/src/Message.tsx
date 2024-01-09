//for naming a function component in a react app, it is advisable to use PascalCasing(capitalizing the first letter of each word)
function Message() {
  // this format is called JSX:JavaScript XML
  // this statement or code below is not html
  // JSX helps to easily create dynamic content
  // expression is a piece of code that produces a value
  const name = 'Amara';
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}

export default Message;
