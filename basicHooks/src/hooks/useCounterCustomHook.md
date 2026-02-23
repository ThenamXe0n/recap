# Custom Hook and Higher-Order Function (HOF)

---

# Custom Hook in React

## Definition

A **Custom Hook** in React is a reusable JavaScript function whose name starts with `use` and allows you to extract and reuse stateful logic across multiple components using built-in React hooks like `useState`, `useEffect`, and others.

Custom hooks help in:
- Code reusability
- Separation of concerns
- Cleaner and more maintainable components
- Avoiding duplication of logic

---

## Key Points

- The function name must start with `use`
- It can call other React hooks inside it
- It cannot be called conditionally
- It is used only inside React components or other hooks

---

## Example Structure

```javascript
import { useState } from "react";

function useCustomHook() {
  const [state, setState] = useState(null);

  return state;
}

export default useCustomHook;
```

---

## Interview Definition (Custom Hook)

> A custom hook is a reusable function in React that encapsulates component logic using built-in hooks, enabling logic sharing across multiple components without repeating code.

---

# Higher-Order Function (HOF)

## Definition

A **Higher-Order Function (HOF)** is a function that either:
1. Takes another function as an argument, or  
2. Returns a function as its result, or  
3. Both.

Higher-order functions are possible in JavaScript because functions are treated as first-class citizens.

---

## Key Points

- Functions can be passed as arguments
- Functions can return other functions
- Common in functional programming
- Examples: `map()`, `filter()`, `reduce()`

---

## Example 1: Function as Argument

```javascript
function greet(name) {
  return "Hello " + name;
}

function processUserInput(callback) {
  const name = "Nameet";
  return callback(name);
}

processUserInput(greet);
```

---

## Example 2: Function Returning Function

```javascript
function multiplyBy(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplyBy(2);
double(5); // 10
```

---

## Interview Definition (HOF)

> A higher-order function is a function that accepts another function as an argument or returns a function, enabling abstraction and functional programming patterns in JavaScript.