### Questions

**Why would you use a class component over a function component (removing hooks from the question)?**

You would use a class component if you were dealing with legacy code that uses class components. Removing hooks from the question, you would use a class component if the component is intended to be stateful and to have stateful logic.

**Name three lifecycle methods and their purposes.**

`constructor()` allows you to pass in props and holds state. `componentDidMount()` allows you to execute something on page load, such as API calls. `render()` allows you to render elements onto the DOM using JSX.

**What is the purpose of a custom hook?**

A custom hook allows you to bundle a bunch of dynamic logic into one hook so that it is efficient and reusable.

**Why is it important to test our apps?**

It is important to test our apps because it surfaces bugs faster, makes us think about unique use cases, and overall encourages us to write better code.